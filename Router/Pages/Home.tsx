import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Home() {
    const categorias = [
        { id: 1, name: "Electronic", image: "https://cdn.pixabay.com/photo/2024/05/08/17/47/gem-8748822_1280.png" },
        { id: 2, name: "Food & Drink", image: "https://cdn.pixabay.com/photo/2014/12/21/23/52/red-576239_1280.png" },
        { id: 3, name: "Accessories", image: "https://cdn.pixabay.com/photo/2016/09/15/07/05/ring-1671094_1280.jpg" },
        { id: 4, name: "Beauty", image: "https://cdn.pixabay.com/photo/2024/05/08/17/47/gem-8748822_1280.png" },
        { id: 5, name: "Furniture", image: "https://cdn.pixabay.com/photo/2016/09/15/07/05/ring-1671094_1280.jpg" },
        { id: 6, name: "Fashion", image: "https://cdn.pixabay.com/photo/2024/05/08/17/47/gem-8748822_1280.png" },
        { id: 7, name: "Health", image: "https://cdn.pixabay.com/photo/2014/12/21/23/52/red-576239_1280.png" },
    ];

    const flashSale = [
        { id: 1, name: "Electronic", image: "https://cdn.pixabay.com/photo/2013/07/12/16/53/burger-151421_1280.png" },
        { id: 2, name: "Food & Drink", image: "https://cdn.pixabay.com/photo/2014/04/03/11/08/corn-311835_1280.png" },
        { id: 3, name: "Accessories", image: "https://cdn.pixabay.com/photo/2013/07/12/19/18/watermelon-154510_1280.png" },
        { id: 4, name: "Beauty", image: "https://cdn.pixabay.com/photo/2013/07/12/16/53/burger-151421_1280.png" },
        { id: 5, name: "Furniture", image: "https://cdn.pixabay.com/photo/2014/04/03/11/08/corn-311835_1280.png" },
        { id: 6, name: "Fashion", image: "https://cdn.pixabay.com/photo/2013/07/12/19/18/watermelon-154510_1280.png" },
        { id: 7, name: "Health", image: "https://cdn.pixabay.com/photo/2013/07/12/16/53/burger-151421_1280.png" },
    ];

    const banner = [
        { id: 1, image: 'https://s.tmimgcdn.com/scr/1200x750/215800/banner-promocional-de-anuncios-de-fotografia-digital_215836-original.jpg' },
        { id: 2, image: 'https://img.freepik.com/vetores-gratis/modelo-de-banner-de-venda-horizontal-plano-com-foto_23-2149000923.jpg?semt=ais_hybrid' }
    ];

    const combinedData = [
        { id: "category", title: "Categories", data: categorias },
        { id: "flashSale", title: "Flash Sale", data: flashSale }
    ];
    const combinedFavorites = [
        { id: "category", title: "Favorites", data: categorias },
        { id: "flashSale", title: "Classics of LuxeShop", data: flashSale }
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image
                        source={{ uri: "https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_1280.png" }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>LuxeShop</Text>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity>
                        <Icon name="bell-o" size={25} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="bag-handle-outline" size={25} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Find your product"
                    style={styles.searchInput}
                    placeholderTextColor='#000'
                />
                <TouchableOpacity style={styles.filterButton}>
                    <Ionicons name="filter-outline" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Banner */}
            

            {/* Combined Sections */}
            {combinedData.map((section) => (
                <View key={section.id}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.flashSaleTitle}>{section.title}</Text>
                        {section.id === "flashSale" && (
                            <Text style={styles.flashSaleTimer}>Ends in 12:56:32</Text>
                        )}
                    </View>
                    <FlatList
                        data={section.data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.categoryItem}>
                                <Image source={{ uri: item.image }} style={styles.categoryImage} />
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </View>
                        )}
                        contentContainerStyle={styles.categoriesContainer}
                    />
                </View>
            ))}
            <FlatList
                data={banner}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.image }} style={styles.promotionImage} />
                )}
                contentContainerStyle={{ paddingVertical: 10 }}
            />
            {combinedFavorites.map((section) => (
                <View key={section.id}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.flashSaleTitle}>{section.title}</Text>
                        {section.id === "flashSale" && (
                            <Text style={styles.flashSaleTimer}>Ends in 12:56:32</Text>
                        )}
                    </View>
                    <FlatList
                        data={section.data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.categoryItem}>
                                <Image source={{ uri: item.image }} style={styles.categoryImage} />
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </View>
                        )}
                        contentContainerStyle={styles.categoriesContainer}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 },
    headerLeft: { flexDirection: "row", alignItems: "center" },
    title: { fontSize: 25, fontWeight: "bold", color: "#000", marginLeft: 10, textAlignVertical:'center' },
    headerRight: { flexDirection: "row", gap: 15 },
    image: { height: 50, width: 50, borderRadius: 25 },
    searchContainer: { flexDirection: "row", alignItems: "center", margin: 10 },
    searchInput: { flex: 1, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 10, color: '#000' },
    filterButton: { backgroundColor: "#ff6347", padding: 10, marginLeft: 10, borderRadius: 10 },
    categoriesContainer: { paddingVertical: 10, paddingLeft: 10 },
    categoryItem: { alignItems: "center", marginRight: 15, marginTop: 15, marginBottom: 15 },
    categoryImage: { width: 60, height: 60, borderRadius: 30, marginBottom: 5 },
    categoryText: { fontSize: 12, fontWeight: "500", color: '#000' },
    promotionImage: { width: 300, height: 150, borderRadius: 10, marginHorizontal: 10 },
    sectionHeader: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center" },
    flashSaleTitle: { fontSize: 18, fontWeight: "bold", color: '#000' },
    flashSaleTimer: { color: "red", fontWeight: "bold" },
});
