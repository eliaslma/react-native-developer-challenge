import React, { useEffect, useState } from 'react';
import { MovieType } from '../../api/movieService';
import { MovieCard } from '../../components/MovieCard';
import { StatusBar } from 'expo-status-bar';

import {
    View,
    Dimensions,
    Animated,
    Platform,
} from 'react-native';

import {
    Container,
} from './styles';
import { getMovies } from '../../api/movieService';

const { width } = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.60 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export function HomeScreen() {

    const [movies, setMovies] = useState<MovieType[]>([]);

    const scrollX = React.useRef(new Animated.Value(0)).current;

    const renderItem = (item: any, index: number) => {

        if (!item.poster_path) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
        }

        const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
        ];

        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
        });

        return (
            <View style={{ width: ITEM_SIZE }}>
                <Animated.View
                    style={{
                        marginHorizontal: SPACING,
                        transform: [{ translateY }],
                        backgroundColor: 'white',
                        borderRadius: 34,
                    }}>
                    <MovieCard posterPath={item.poster_path} />
                </Animated.View>
            </View>
        );
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await getMovies();
            if (moviesData) {
                setMovies([{ id: 0 } as MovieType, ...moviesData, { id: 20 } as MovieType])
            }
        };

        fetchMovies();
    }, []);

    return (
        <Container>
            <StatusBar style='light' />
            {movies &&
                <Animated.FlatList
                    style={{ flex: 1 }}
                    showsHorizontalScrollIndicator={false}
                    data={movies}
                    keyExtractor={(item: any) => item.id}
                    horizontal
                    bounces={false}
                    decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                    renderToHardwareTextureAndroid
                    contentContainerStyle={{ alignItems: 'center' }}
                    snapToInterval={ITEM_SIZE}
                    snapToAlignment='start'
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => renderItem(item, index)}>
                </Animated.FlatList>
            }
        </Container>
    );
}
