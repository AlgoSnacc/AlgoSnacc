import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const Snacks = () => {
  const list = [
    'Reverse Linked List',
    'Matrix Transpose',
    'Subset Sum',
    'Merge Sort',
    'Valid Binary Search Tree',
  ];

  return (
    <ScrollView>
      {list.map((algo, i) => (
        <ListItem
          key={i}
          title={algo}
          rightIcon={{
            type: 'font-awesome',
            name: 'check-circle',
            color: '#43b54c',
          }}
          bottomDivider
        />
      ))}
    </ScrollView>
  );
};

export default Snacks;
