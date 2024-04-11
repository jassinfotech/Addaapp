import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getData, postData } from './helperFile';
import lodoImage from '../image/man.png';

const ClassicScreen = ({ challengeData, handleAcceptChallenge }) => {
    console.log(challengeData)
    const [mode, setMode] = useState('view');
    return (
        <View>
            {challengeData.map((item) => (
                <View key={item.id} style={{ backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 10, marginVertical: 7 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                        <View>
                            <Image source={lodoImage} style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                            <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>{item.name}</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#BA1E1E', fontSize: 11, textAlign: 'center' }}>{item.code}</Text>
                            <Text style={{ color: '#000', fontSize: 14, textAlign: 'center' }}>has challenges for</Text>
                            <Text style={{ color: '#BA1E1E', fontSize: 14, textAlign: 'center' }}>{`${item.coins} Coins`}</Text>
                        </View>
                        <View>
                            <Image
                                source={lodoImage}
                                style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                            {item.opponent_username ? (
                                <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>
                                    {item.opponent_username}
                                </Text>
                            ) : (
                                <Text style={{ color: '#888', fontSize: 11, textAlign: 'center' }}>
                                    Waiting...
                                </Text>
                            )}
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ backgroundColor: '#55bc83', borderBottomLeftRadius: 10, width: '50%', padding: 3 }}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>{`Winning :${item.winningCoins} coins`}</Text>
                        </TouchableOpacity>

                        {item.status === 'pending' ? (
                            <TouchableOpacity onPress={() => handleAcceptChallenge(item.id)} style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, width: '50%', padding: 3 }}>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Accept</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={{ backgroundColor: '#55bc83', borderBottomRightRadius: 10, width: '50%', padding: 3 }} disabled>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Accepted</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            ))}
        </View>
    );
};
export default ClassicScreen;
