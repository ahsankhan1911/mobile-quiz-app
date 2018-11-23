import React from 'react';

import { Text, View ,Button, ToastAndroid} from 'react-native';
import { Camera, Permissions, FaceDetector } from 'expo';

class FaceDetect extends React.Component {
    state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      imageUri : ''
    };
  
    static navigationOptions = {
      title: 'Welcome',
    };
    
  
    async componentWillMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === 'granted' });
    }
  
    snap = async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        if(photo.uri) {
          this.setState({
              imageUri : photo.uri
          }, () => {
               this.detectFaces(this.state.imageUri).then((value) => {
                   
                   if(value.faces.length)  {
                    this.navigator()
                   } 
  
                   else {
                    ToastAndroid.show('No Face Detected', ToastAndroid.SHORT);
                   }
                 
               }).catch((reason) => {
                 console.log(reason)
               })
  
             
           
          })
  
        }
       
      }
    };
  
    detectFaces = async (imageUri) => {
      const options = { mode: FaceDetector.Constants.Mode.fast };
      return await FaceDetector.detectFacesAsync(imageUri, options);
    };
  
  
    navigator = () => {
      this.props.navigation.navigate('Quiz')
    }
    
  
    render() {
    
      const { hasCameraPermission } = this.state;
      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
          <View style={{ flex: 1 }}>
            <Camera  ref={ref => { this.camera = ref; }} style={{ flex: 1 }} type={Camera.Constants.Type.front}>
              <View
              
                style={{
                  // flex: 1,
                  backgroundColor: 'transparent',
                  // flexDirection: 'row',
                }}>
               
              </View>
            </Camera>
            <Button
            
            onPress={this.snap}
            title="Tap to Take Picture"
          />
          
          </View>
        );
      }
    }
  }

  export default FaceDetect;

  