import json
from pprint import pprint
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import requests
import pandas as pd
from bs4 import BeautifulSoup
from urllib.request import urlopen
import sys
import pymongo

#Set up Mongo
#db name: heroku_jq1zsq2q
# db user : livecrime_user

uri = "mongodb://livecrime_user:track#txN0W@ds137498.mlab.com:37498/heroku_jq1zsq2q?retryWrites=false"
client = pymongo.MongoClient(uri)
db = client.heroku_jq1zsq2q




def execute_hpdtraffic():
    

    # Set up url
    url = 'https://cohweb.houstontx.gov/ActiveIncidents/Combined.aspx?agency=P'
    html = requests.get(url,timeout=5)
    #col_names = ['Address','Cross Street','Key Map','Call Time(Opened)','Incident Type','Combined Response']
    address = []
    cross = []
    keymap = []
    time = []
    incident_type = []
    response = []
    lat = []
    lon = []

    # Reading the html page
    soup = BeautifulSoup(html.text, "html.parser")

    #Get id for the table
    tbody = soup.find(id="GridView2")

    #tbody.find('tr').find('th').text
    tag = tbody.findAll('tr')[1:]

    for tr in tag:
        print('*******')
        print(tr.find_all('td')[0].text)
        address.append(tr.find_all('td')[0].text)
        print('*******')
        print(tr.find_all('td')[1].text)
        cross.append(tr.find_all('td')[1].text)
        print('*******')
        print(tr.find_all('td')[2].text)
        keymap.append(tr.find_all('td')[2].text)
        print('*******')
        print(tr.find_all('td')[3].text)
        time.append(tr.find_all('td')[3].text)
        print('*******')
        print(tr.find_all('td')[4].text)
        incident_type.append(tr.find_all('td')[4].text)
        print('*******')
        print(tr.find_all('td')[5].text)
        response.append(tr.find_all('td')[5].text)
        print('*******')

        print('-------- NEXT TAG --------')

    #Create a new dataframe
    df = pd.DataFrame({'Address':address,'Cross_Street':cross,'Keymap':keymap,'Time':time,'Incident_Type':incident_type,'Response':response} )

    #Remove blanks from the df
    df_new = df[df["Address"] != '\xa0']

    #Create a list that will store location co-ordinates
    location = []

    #Loop to create co-ordinates based on address
    for x in range(0,len(df_new)):
        try:
            print(df['Address'][x])
            row = requests.get('https://nominatim.openstreetmap.org/search?q='+ df['Address'][x] + ',Houston,Tx&format=json')
            lat.append(row.json()[0]['lat'])
            lon.append(row.json()[0]['lon'])
            location.append([row.json()[0]['lat'],row.json()[0]['lon']])
            print('-----APPEND DONE------')
        except:
            lat.append('')
            lon.append('')
            location.append('')
            pass

    df_new['location'] = location
    df_new['lat'] = lat
    df_new['lon'] = lon

    #Remove rows with empty location data
    df_new = df_new[(df_new['lat']!= '') & (df_new['lon']!= '')]
    #df_new.to_csv('data/live_incidents_raw.csv',index=False)
    
    #Insert to Crimetracker collection(collection with all data)
    #db.crimetracker.drop()
    df_crimedata = df_new.to_dict('records')
    crimetracker = db['crimatracker']
    crimetracker.insert_many(df_crimedata)
    pprint(df_crimedata)
    


    #Creating a new JSON for livedata collection(Needs four fields - location, type, address, time)
    df_live = pd.DataFrame({'location':df_new["location"], 'time':df_new["Time"], 
                        'type':df_new["Incident_Type"], 'address':df_new["Address"]})

    #df_live.to_csv('data/live_incidents.csv',index=False)

    # Creating JSON for the new df
    dfs_dict = df_live.to_dict('records')
    pprint(dfs_dict)

    #Empty livedata table
    db.livedata.drop()

    #Insert to Livedata collection
    livedata = db['livedata']
    livedata.insert_many(dfs_dict)

def execute_hpdblog():
    return

execute_hpdtraffic()
