// import React, { useEffect, useState } from 'react';
// import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch data from the API
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then((response) => response.json())
//       .then((data) => {
//         setTodos(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={todos}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.todoItem}>
//             <Text style={styles.todoTitle}>
//               {item.id}. {item.title}
//             </Text>
//             <Text style={item.completed ? styles.completed : styles.pending}>
//               {item.completed ? 'Completed' : 'Pending'}
//             </Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   todoItem: {
//     backgroundColor: '#fff',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//     elevation: 1,
//   },
//   todoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   completed: {
//     color: 'green',
//     marginTop: 5,
//   },
//   pending: {
//     color: 'red',
//     marginTop: 5,
//   },
// });

// export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostList from './src/screens/PostList';
import PostDetails from './src/screens/PostDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PostList" component={PostList} options={{ title: 'Posts' }} />
        <Stack.Screen name="PostDetails" component={PostDetails} options={{ title: 'Post Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
