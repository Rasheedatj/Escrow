import Banner from '@/components/home/Banner';
import Hero from '@/components/home/Hero';
import ProfileHeader from '@/components/home/ProfileHeader';
import Tag from '@/components/home/Tag';
import Transactions from '@/components/home/Transactions';
import { globalStyles } from '@/lib/commonStyles';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

const HomeScreen = () => {
  const [isBannerOpen, setOpenBanner] = useState(false);

  const openBanner = () => setOpenBanner(true);
  const closeBanner = () => setOpenBanner(false);

  useEffect(() => {
    let timerId: any;
    if (isBannerOpen) {
      timerId = setTimeout(closeBanner, 3000);
    }

    return () => clearTimeout(timerId);
  }, [isBannerOpen]);
  return (
    <View style={globalStyles.rootContainer}>
      {isBannerOpen ? <Banner onClose={closeBanner} /> : <ProfileHeader />}
      <Hero />
      <Tag openBanner={openBanner} />
      <Transactions />
    </View>
  );
};

export default HomeScreen;
