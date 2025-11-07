import LockOutline from '@/assets/images/LockOutline';
import { formatCurrency } from '@/lib/helpers';
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';

const Hero = () => {
  const [activeHero, setActiveHero] = useState<'Wallet' | 'Escrow'>('Wallet');

  const balance = {
    escrow: 18000,
    wallet: 4000,
  };

  return (
    <View style={styles.hero}>
      <Text style={styles.heroTitle}>{activeHero} Balance</Text>

      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>
          {formatCurrency(
            balance[activeHero.toLowerCase() as 'escrow' | 'wallet']
          )}
        </Text>
        <Entypo name='eye' size={24} color='#000000C9' />
      </View>

      <View style={styles.buttons}>
        {activeHero === 'Wallet' ? (
          <>
            <Button icon={<AntDesign name='plus' size={22} color='white' />}>
              {' '}
              Fund Wallet
            </Button>
            <Button
              mode='flat'
              icon={<Feather name='download' size={22} color='#2D2D2D87' />}
            >
              Withdraw
            </Button>
            <IconButton onPress={() => setActiveHero('Escrow')} mode='flat'>
              <Ionicons name='chevron-forward' size={23} color='#858585' />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton>
              <LockOutline />
            </IconButton>

            <IconButton onPress={() => setActiveHero('Wallet')} mode='flat'>
              <Ionicons name='chevron-back' size={23} color='#858585' />
            </IconButton>
          </>
        )}
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  hero: {
    backgroundColor: '#D9D9D92E',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 25,
  },

  heroTitle: {
    color: '#000000AD',
    fontSize: 16,
    paddingBottom: 20,
  },

  balance: {
    color: '#000000C9',
    fontSize: 27,
    fontWeight: 'bold',
    marginRight: 10,
  },

  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});
