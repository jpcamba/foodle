import React, {Component} from 'react';
import { Modal, TouchableHighlight, View, Alert } from 'react-native';
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
                    <InputGroup borderType="underline">
                        <Icon ios="ios-text" android="md-text" style={{color:'#384850'}}/>
                        <Input placeholder="Place your message here.." />
                    </InputGroup>
                    <Button block onPress={() => {  this.setModalVisible(false); }}>
                        <Icon ios='ios-send' android="md-send"/>  
                    </Button>
                </Content>

                <Footer>
                    <Title></Title>
                </Footer>
            </Container>
        </Modal>

        <Button  rounded light   onPress={() => {
            this.setModalVisible(true);
          }}>
            <Icon ios='ios-text' android="md-text"/>  
        </Button>

      </View>
    );
  }
}