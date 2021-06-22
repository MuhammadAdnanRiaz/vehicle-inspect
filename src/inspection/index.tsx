/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Carousal from '../carousal';
import {windowWidth, windowHeight} from '../utils/dimenstions';
import axios from 'axios';
import QRCodeScanner from '../qrcode';

export default function Inspection() {
  const [loading, setLoading] = React.useState(true);
  const [images, setImages] = React.useState([]);
  const [vehicle, setVehicle] = React.useState<number | null>(1);
  React.useEffect(() => {
    if (typeof vehicle === 'number') {
      (async () => {
        try {
          const res = await axios.get('http://143.198.238.67/images/');
          let data = res.data.sort((a: any, b: any) =>
            a.sequence > b.sequence ? 1 : -1,
          );
          data = await Promise.all(
            data.map(async (item: any): Promise<any[]> => {
              let d;
              const r = await axios.get(
                `http://143.198.238.67/checklist/?image=${item.id}`,
              );
              d = r.data;
              return {
                ...item,
                actions: d,
              };
            }),
          );
          console.log(data);
          setImages(data);
          setLoading(false);
        } catch (error) {
          console.warn(error);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicle]);
  return (
    <View style={{flex: 1, width: windowWidth, height: windowHeight}}>
      {/* {typeof vehicle !== 'number' ? (
        <QRCodeScanner setVehicle={setVehicle} />
      ) : loading ? (
        <Text>Loading...</Text>
      ) : (
        <Carousal images={images} />
      )} */}
      {loading ? <Text>Loading...</Text> : <Carousal images={images} />}
    </View>
  );
}
