import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import lodoImage from '../image/logo.png';

const MyChallenges = ({ acceptchallengeData }) => {
    console.log('acceptchallengeData---------', acceptchallengeData)
    const navigation = useNavigation();

    return (
        <View>
            <ScrollView style={{ flexDirection: 'row', paddingHorizontal: 10 }} horizontal={true}>
                {acceptchallengeData.map((challenge, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate("Contested", { challengeId: challenge })}
                        style={{ backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 10, marginVertical: 7, width: 200, }}
                    >
                        <View style={{ padding: 5 }}>
                            <View>
                                <Text style={{ color: '#000', fontSize: 11, textAlign: 'center', marginTop: 10 }}>
                                    {challenge.opponent_username} has accepted this {'\n'}
                                    challenge
                                </Text>
                                 <Text style={{ color: '#BA1E1E', fontSize: 11, textAlign: 'center', marginTop: 10 }}>{challenge.amount}</Text>
                            </View>
                            <View>
                                <Image source={lodoImage} style={{ width: 30, height: 30, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                                <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>{challenge.name}</Text>
                            </View>
                        </View>
                        {challenge.status === 'canceled' ? (
                            <TouchableOpacity style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, width: '100%', padding: 3 }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>Delete</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, width: '100%', padding: 3 }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>Play</Text>
                            </TouchableOpacity>
                        )}

                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({

    modalContent: {
        backgroundColor: '#f1e6ea',
        borderRadius: 10,
        width: 250
    },
    modalContent1: {
        backgroundColor: '#f1e6ea',
        borderRadius: 10,
        width: 250,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    yes: {
        backgroundColor: '#BA1E1E',
        paddingHorizontal: 30,
        borderRadius: 20,
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600',
        paddingVertical: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})

export default MyChallenges