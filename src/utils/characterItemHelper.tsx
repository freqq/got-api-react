const getHouseIdFromLink = (allegiance: string): string | undefined => allegiance.split('/').pop();

const getCharacterLifeLength = (born: number, died: number): number => died - born;

export const getCharacterName = (name: string, aliases: string[]): string => name + aliases;

export const getCharacterAliveField = (born: string, died: string): string => {
  if (!born && !died) return 'Unknown';

  if (!born) return 'No';

  if (!died) return 'Yes';

  if (died) return `No, died at X years old`;

  return '-';
};

export const getCharacterHouseIds = (allegiances: string[]) => (
  <div className="character-houses">
    {allegiances.map((allegiance: string) => {
      const houseId = getHouseIdFromLink(allegiance);
      return <a href={`/house/${houseId}`}>{houseId}</a>;
    })}
  </div>
);
