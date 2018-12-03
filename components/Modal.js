import React, {Component} from 'react';
import { Modal, TouchableHighlight, View, Alert, StyleSheet, ToastAndroid } from 'react-native';
import { Text, Button, Icon, Left, InputGroup, Input, Right, Body, Container, Header, Footer, Title, Content } from 'native-base';

export default class ModalComponent extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <Container>
                <Header>
                    <Left>
                        <Button transparent  onPress={() => { this.setModalVisible(!this.state.modalVisible);}}>
                                <Icon ios='ios-close-circle' android="md-close-circle"/>  
                        </Button>
                    </Left>
                    <Body>
                         <Title>New Message</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>

                <Content>
                    <InputGroup style={styles.messageInput} borderType="underline">
                        <Icon ios="ios-text" android="md-text" style={{color:'#384850'}}/>
                        <Input placeholder="Place your message here.." />
                    </InputGroup>
                    <Button style={styles.sendButton} block onPress={this._onMessageSend}>
                        <Icon ios='ios-send' android="md-send"/>  
                        <Text>Send</Text>
                    </Button>
                </Content>

                <Footer>
                    <Title></Title>
                </Footer>
            </Container>
        </Modal>

        <Button style={styles.messageButton} rounded light onPress={() => {
            this.setModalVisible(true);
          }}>
            <Icon ios='ios-text' android="md-text"/>  
        </Button>

      </View>
    );
  }

  _onMessageSend = () => {
    this.setModalVisible(false);
    ToastAndroid.show('Message sent!', ToastAndroid.SHORT);
  };
}

const styles = StyleSheet.create({
  messageInput: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 300,
    margin: 20
  },
  sendButton: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 150
  },
  messageButton: {
    marginTop: 5
  }
});