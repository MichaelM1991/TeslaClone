import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
      },
      subtitle: {
        fontSize: 16,
        color: '#5c5e62',
      },
        subtitleCTA: {
            textDecorationLine: 'underline',
        },
      image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      }, 

      buttonsContainer: {
        position: 'absolute',
        bottom: 50, // pixels from the bottom
        width: '100%', // 100% of the parent container
      }
});

export default styles;