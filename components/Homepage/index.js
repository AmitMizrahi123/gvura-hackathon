import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Entypo, MaterialCommunityIcons, Ionicons    } from '@expo/vector-icons';
import styles from './styles';
import UserLocation from '../Location/UserLocation';

const Homepage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.slider}>
          <Entypo style={styles.menuIcon} name="menu" size={30} color="white" />          
          <ScrollView>
          <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
          </ScrollView>
        </View>
        <View style={styles.footer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>שלום טל</Text>
            </View>
           <UserLocation/>
            <View style={styles.moreDetails}>
              <Text style={styles.moreDetailsText}>כאשר אתה לא זמין לא תקבל עדכונים על התנדבויות</Text>
            </View>
            <View style={styles.coinsTitle}>
            <Text style={styles.boldText}>מטבעות גבורה</Text>
            </View>
            <View style={styles.coinStatus}>
            <MaterialCommunityIcons name="cash-usd" size={24} color="rgba(252, 185, 0, 100)" />
            <MaterialCommunityIcons name="cash-usd" size={24} color="rgba(252, 185, 0, 100)" />
            <MaterialCommunityIcons name="cash-usd" size={24} color="rgba(252, 185, 0, 100)" />
            <MaterialCommunityIcons name="cash-usd-outline" size={24} color="rgba(252, 185, 0, 100)" />
            <MaterialCommunityIcons name="cash-usd-outline" size={24} color="rgba(252, 185, 0, 100)" />
            <Text style={styles.coinDescription1}>מטבעות שצברת</Text>
            </View>
            <View style={styles.coinStatus}>
            <Ionicons name="ios-time" size={24} color="rgba(252, 185, 0, 100)" />
            <Ionicons name="ios-time" size={24} color="rgba(252, 185, 0, 100)" />
            <Ionicons name="ios-time" size={24} color="rgba(252, 185, 0, 100)" />
            <Ionicons name="ios-time" size={24} color="rgba(252, 185, 0, 100)" />
            <Ionicons name="ios-time-outline" size={24} color="rgba(252, 185, 0, 100)" />
            <Text style={styles.coinDescription}>שעות זמינות מצטברות</Text>
            </View>
            <View style={styles.coinStatus}>
            <Ionicons name="timer" size={24} color="rgba(252, 185, 0, 100)" />
            <Ionicons name="timer-outline" size={24} color="rgba(252, 185, 0, 100)" />
            <Ionicons name="timer-outline" size={24} color="rgba(252, 185, 0, 100)" />
            <Ionicons name="timer-outline" size={24} color="rgba(252, 185, 0, 100)" />
            <Ionicons name="timer-outline" size={24} color="rgba(252, 185, 0, 100)" />
            <Text style={styles.coinDescription}>זמינות עד למטבע הבא</Text>
            </View>
        </View>
    </View>
  );
};

export default Homepage;