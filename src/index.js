export default function healthStatus(character) {
  if (!character || typeof character !== 'object' || typeof character.health !== 'number') {
    throw new Error('Invalid character object');
  }

  const { health } = character;

  if (health > 50) {
    return 'healthy';
  }
  if (health >= 15) {
    return 'wounded';
  }
  return 'critical';
}