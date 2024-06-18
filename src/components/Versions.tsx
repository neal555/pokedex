import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Sprites} from '../types/pokemonTypes';
import {getImagesFromSprites} from '../utils/versions';

interface VersionsProps {
  sprites: Sprites | null;
}

const Versions = ({sprites}: VersionsProps) => {
  const formatedSprites = getImagesFromSprites(sprites ?? null);
  if (!formatedSprites) {
    return (
      <View>
        <Text>No images found</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Default</Text>

      <View style={styles.imageGroup} testID="default-images">
        {formatedSprites.default.map(
          sprite =>
            typeof sprite?.image === 'string' && (
              <View key={sprite?.name} style={styles.imageContainer}>
                <Image source={{uri: sprite?.image}} style={styles.image} />
              </View>
            ),
        )}
      </View>

      {formatedSprites.version.map((version, index) => (
        <View key={version.name} testID={`generations-images-${index}`}>
          <Text style={styles.title}>{version.name}</Text>
          {version.generation.map(generation => (
            <View key={generation.name}>
              <Text style={styles.subtitle}>{generation.name}</Text>
              <View style={styles.imageGroup}>
                {generation.sprites.map(
                  sprite =>
                    typeof sprite?.image === 'string' && (
                      <View key={sprite?.name}>
                        <View style={styles.imageContainer}>
                          <Image
                            source={{
                              uri: sprite?.image,
                            }}
                            style={styles.image}
                          />
                        </View>
                      </View>
                    ),
                )}
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Versions;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    width: 146,
    height: 146,
    marginRight: 16,
    marginBottom: 16,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  details: {
    marginTop: 24,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});
