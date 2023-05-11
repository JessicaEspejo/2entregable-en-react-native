import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 12,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 5,
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    fontFamily: 'Poppins-Regular',
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 11,
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  detailText: {
    marginTop: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
});
