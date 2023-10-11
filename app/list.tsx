import { View, Text, StyleSheet, SectionList } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import Header from '../src/components/Header';
import data from '../src/services/data';

interface Car {
  id: number
  brand: string
  year: number
  model: string
};

interface SectionData {
  title: string
  data: Car[]
}

const list = () => {
  const carsPerBrand: any = {}
  data.forEach(car => {
    if (carsPerBrand[car.brand] === undefined) {
      carsPerBrand[car.brand] = {
        title: car.brand,
        data: []
      }
    }

    carsPerBrand[car.brand].data.push(car)
  })

  const sectionData: SectionData[] = Object.values(carsPerBrand)

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => <Header />,
        }}
      />

      <Text>Carros a venda</Text>

      <SectionList
        style={styles.sectionList}
        sections={sectionData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.sectionList_row}>
            <Text style={styles.sectionList_row_text}>{`Marca: ${item.brand}`}</Text>
            <Text style={styles.sectionList_row_text}>{`Modelo: ${item.model}`}</Text>
            <Text style={styles.sectionList_row_text}>{`Ano: ${item.year}`}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionList_title}>
            <Text>| {title.toUpperCase()} |</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    width: '100%',
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  sectionList: {
    width: '100%'
  },
  sectionList_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  sectionList_row_text: {
    margin: 5
  },
  sectionList_title: {
    marginTop: 50,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 'bold'
  }
});

export default list