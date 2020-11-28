import React from 'react';
import { View, Text } from 'react-native';
import StoreCategoriesSearch from './components/StoreCategoriesSearch';
import StoreCategoriesStoreList from "./components/StoreCategoryStoreList";

const StoreCategoriesView = () => {
    return (
        <View>
            <StoreCategoriesSearch />
            <StoreCategoriesStoreList />
        </View>
    )
}

export default StoreCategoriesView;
