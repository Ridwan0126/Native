import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {saveKeywordProduct} from '../../../actions/ProductAction';
import {Search} from '../../../assets/Icons';
import {colors, responsiveHeight, fonts} from '../../../utils';
import {Jarak, Tombol} from '../../Kecil';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    // getData('user').then((res) => {
    //   if (res) {
    //     this.props.dispatch(getListKeranjang(res.uid));
    //   }
    // });
  }

  selesaiCari = () => {
    console.log('Cekkkkkkkk', this.setState.search);
    const {page, navigation, dispatch} = this.props;
    const {search} = this.state;

    //   //jalankan action save keyword
    dispatch(saveKeywordProduct(search));

    //   //jika itu halaman home kita navigate ke listJersey
    if (page !== 'ListProduct') {
      navigation.navigate('ListProduct');
    }

    this.setState({
      search: '',
    });
  };

  render() {
    const {search} = this.state;
    const {navigation} = this.props;
    // let totalKeranjang;

    // if(getListKeranjangResult) {
    //   totalKeranjang = Object.keys(getListKeranjangResult.pesanans).length;
    // }

    return (
      <View style={styles.conatiner}>
        <View style={styles.WrapHeader}>
          <View style={styles.Cari}>
            <Search />
            <TextInput
              value={search}
              placeholder="Search Product"
              style={styles.input}
              onChangeText={search => this.setState({search})}
              onSubmitEditing={() => this.selesaiCari()}
            />
          </View>
          <Jarak width={10} />
          <Tombol
            icon="Keranjang"
            totalKeranjang={2}
            padding={10}
            onPress={() => navigation.navigate('Keranjang')}
          />
        </View>
      </View>
    );
  }
}

// const mapStateToProps = (state) => ({
//   getListKeranjangResult: state.KeranjangReducer.getListKeranjangResult,
// })

export default connect()(HeaderComponent);

const styles = StyleSheet.create({
  conatiner: {backgroundColor: colors.primary, height: responsiveHeight(130)},
  input: {fontSize: 16, fontFamily: fonts.primary.regular},
  Cari: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    // borderRadius: 5,
    paddingLeft: 6,
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  WrapHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
});
