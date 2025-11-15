import Banner from '@/components/home/Banner';
import Hero from '@/components/home/Hero';
import ProfileHeader from '@/components/home/ProfileHeader';
import Tag from '@/components/home/Tag';
import Transactions from '@/components/home/Transactions';
import { walletTransactionData } from '@/data/UI';
import { globalStyles } from '@/lib/commonStyles';
import { useAddTransaction } from '@/lib/queries';
import { useAuth } from '@/lib/store/authContext';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

const HomeScreen = () => {
  const [isBannerOpen, setOpenBanner] = useState(false);
  const { createTransactionMutation, isPending } = useAddTransaction();
  const { user } = useAuth();

  const openBanner = () => setOpenBanner(true);
  const closeBanner = () => setOpenBanner(false);

  const handleAdd = () => {
    walletTransactionData.map((item) =>
      createTransactionMutation(
        {
          newTransaction: item,
          token: user?.idToken!,
          type: 'walletTransactions',
        },
        {
          onSuccess: () => console.log('Action successful'),
          onError: (error: any) => console.log(error.message),
        }
      )
    );
  };

  useEffect(() => {
    let timerId: any;
    if (isBannerOpen) {
      timerId = setTimeout(closeBanner, 3000);
    }

    return () => clearTimeout(timerId);
  }, [isBannerOpen]);
  return (
    <ScrollView
      style={[globalStyles.rootContainer, { flex: 1 }]}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
    >
      {isBannerOpen ? <Banner onClose={closeBanner} /> : <ProfileHeader />}
      <Hero />
      {/* <Button onPress={handleAdd} isLoading={isPending}>
        Add all
      </Button> */}
      <Tag openBanner={openBanner} />
      <Transactions />
    </ScrollView>
  );
};

export default HomeScreen;
