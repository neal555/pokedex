import {Sprites} from '../types/pokemonTypes';

export const isKeyValid = (key: string): boolean => {
  return !key.includes('back');
};

interface Sprite {
  name: string;
  image: string;
}
interface Generation {
  name: string;
  sprites: (Sprite | null)[];
}
interface Version {
  name: string;
  generation: Generation[];
}

interface FormatedSpprites {
  version: Version[];
  default: Sprite[];
}

export const getImagesFromSprites = (
  sprites: Sprites | null,
): FormatedSpprites | null => {
  if (!sprites) {
    return null;
  }
  const formatedSprites: FormatedSpprites | null = {
    version: [] as Version[],
    default: [] as Sprite[],
  } as FormatedSpprites;
  Object.entries(sprites).forEach(([key, value]) => {
    if (isKeyValid(key) && value && typeof value === 'string') {
      formatedSprites.default.push({
        name: key,
        image: value as string,
      });
    }

    if (key === 'versions') {
      Object.keys(sprites[key]).forEach(versionKey => {
        formatedSprites.version.push({
          name: versionKey,
          generation: Object.keys(sprites[key][versionKey]).map(
            generationKey => {
              return {
                name: generationKey,
                sprites: Object.entries(
                  sprites[key][versionKey][generationKey],
                ).map(([spriteKey, spriteValue]) => {
                  if (isKeyValid(spriteKey) && spriteValue) {
                    return {
                      name: spriteKey,
                      image: spriteValue as string,
                    };
                  }
                }),
              };
            },
          ) as Generation[],
        });
      });
    }
  });

  return formatedSprites;
};
