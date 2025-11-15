import User from '@/assets/images/User';
import ProgressItem from '@/components/escrow/ProgressItem';
import SummaryItem from '@/components/escrow/SummaryItem';
import Button from '@/components/UI/Button';
import PageTitle from '@/components/UI/PageTitle';
import { Progress, summaryItems } from '@/data/UI';
import { appColors } from '@/lib/commonStyles';
import { deviceWidth, formatCurrency } from '@/lib/helpers';
import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const SummaryScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <PageTitle hasBackButton={true}>Transaction Summary</PageTitle>

      <View style={styles.body}>
        <View>
          <Text style={styles.amount}>Amount</Text>
          <Text style={styles.amountNumber}>{formatCurrency(560)}</Text>
        </View>

        <View style={styles.summary}>
          <View style={styles.iconBox}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
              }}
              style={[styles.icon, styles.iconLeft]}
            />

            <User />
          </View>
          <View style={styles.article}>
            <Text style={styles.title}>Abimbola David</Text>
            <Text style={styles.description}>Tag32Gb56</Text>
          </View>

          <View style={styles.last}>
            <Text style={styles.summaryamount}>{formatCurrency(590)}</Text>
            <View style={styles.status}>
              <Text style={styles.time}>Pending</Text>
              <Octicons name='dot-fill' size={24} color='#F5D256' />
            </View>
          </View>
        </View>

        <View style={styles.summaryItems}>
          {summaryItems.map((item, index) => (
            <SummaryItem
              key={item.title + index}
              icon={item.icon}
              title={item.title}
              details={item.details}
              style={index === 1 && styles.midSummary}
            />
          ))}
        </View>

        <View>
          <Text style={styles.progressTitle}>Transaction Progress</Text>
          <Text style={styles.progressDescription}>
            Update the progress of this transaction to keep the other party
            notified with the progress.
          </Text>
        </View>

        <View style={styles.track}>
          {Progress.map((item, index) => (
            <ProgressItem key={item.id} progress={item} isFirst={index === 0} />
          ))}
        </View>

        <Button style={{ width: '100%' }}>Mark Transaction as Complete</Button>
      </View>
    </ScrollView>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  body: {
    padding: 20,
    paddingTop: 26,
    alignItems: 'center',
  },

  amount: {
    color: '#7E7E7ECF',
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 16.74 : 14,
    paddingBottom: 10,
    textAlign: 'center',
  },

  amountNumber: {
    color: '#292929',
    fontSize: deviceWidth > 400 ? 24 : 20,
    fontWeight: 600,
  },

  summary: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: appColors.primary100,
    borderRadius: 14,
    padding: 12,
    backgroundColor: appColors.primary50,
    marginVertical: 20,
  },

  iconBox: {
    flexDirection: 'row',
  },

  icon: {
    width: deviceWidth > 400 ? 47 : 40,
    height: deviceWidth > 400 ? 47 : 40,
    borderRadius: deviceWidth > 400 ? 47 : 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconLeft: {
    marginRight: -10,
    zIndex: 100,
  },

  article: {
    flex: 1,
    marginHorizontal: 10,
  },

  title: {
    paddingBottom: deviceWidth > 400 ? 6 : 4,
    fontSize: deviceWidth > 400 ? 16 : 14,
    color: '#2E2F31',
    fontWeight: 500,
  },

  description: {
    color: '#2E2F318A',
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 14 : 13,
  },

  last: {
    maxWidth: 120,
    justifyContent: 'flex-end',
  },

  summaryamount: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 17.7 : 14,
    color: '#2E2F31',
    paddingBottom: 3,
  },

  time: {
    textAlign: 'left',
    fontSize: deviceWidth > 400 ? 13 : 12,
    color: '#2E2F318A',
    marginRight: 5,
    fontWeight: 500,
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryItems: {
    marginTop: deviceWidth > 400 ? 5 : 0,
    marginBottom: 20,
  },

  midSummary: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D1D1D170',
  },

  progressTitle: {
    color: '#292929',
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 18 : 15,
  },

  progressDescription: {
    fontSize: deviceWidth > 400 ? 16.4 : 14,
    lineHeight: deviceWidth > 400 ? 24 : 22,
    fontWeight: 500,
    color: '#292929B8',
    marginTop: 8,
    marginBottom: 30,
  },

  track: {
    width: '100%',
    marginBottom: 30,
  },
});
