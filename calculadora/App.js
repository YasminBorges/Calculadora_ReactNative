import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

let estados={
   valorTela:'',
   res:0,
   operador: false,
   ponto:false
}

export default function App() {

 

  const [valor,setValor] = useState(estados.valorTela);
  const [resultado,setResultado] = useState(estados.res);

  function operar(){
    try {
      estados.res = eval(estados.valorTela)
      estados.operador = true
      setResultado(estados.res)
    } catch{
      estados.res = 'Erro'
      estados.operador = true
      setResultado(estados.res)
    }
   
  }

  function addNumeros(d){

    if(d=='+' || d=='-' || d=='*' || d=='/' || d=='%'){
      estados.ponto=false
    }
    else if(d=='.' && !estados.ponto){
      estados.ponto=true
      estados.operador=false
    }else if(d=='.' && estados.ponto)
    {
      return
    }

    if((d=='+' || d=='-' || d=='*' || d=='/' || d=='%') && estados.operador){
      estados.valorTela = estados.res
      estados.res= 0
     
    }
    estados.valorTela= estados.valorTela+d
    setValor(estados.valorTela);
    setResultado(estados.res)
    estados.operador=false
  }

  function Limpar(){
    estados={
       valorTela:'',
       res:0,
       ponto:true
    }

    setValor(estados.valorTela);
    setResultado(estados.res);
  }

  function LimpaUmNum(d)
  {
    if(d=='BS'){
      estados.valorTela = valor.substring(0,(valor.length -1));
     setValor(estados.valorTela)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.input}  value={valor} >{valor}</Text>
      <Text style={styles.input}  value={String(resultado)}>{resultado}</Text>

      <View style={styles.fileira}>
        <TouchableOpacity style={styles.button} onPress={Limpar}>
          <Text style={styles.fontStyle}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{LimpaUmNum('BS')}}>
          <Text style={styles.fontStyle}>DEL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{addNumeros('.')}}>
          <Text style={styles.fontStyle}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{addNumeros('/')}}>
          <Text style={styles.fontStyle}>/</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.fileira}>
        <TouchableOpacity style={styles.button2}  onPress={()=>{addNumeros('7')}} >
          <Text style={styles.fontStyle2}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={()=>addNumeros('8')}>
          <Text style={styles.fontStyle2}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={()=>{addNumeros('9')}}>
          <Text style={styles.fontStyle2}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{addNumeros('*')}}>
          <Text style={styles.fontStyle}>X</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.fileira}>
        <TouchableOpacity style={styles.button2} onPress={()=>{addNumeros('4')}}>
          <Text style={styles.fontStyle2}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={()=>{addNumeros('5')}}>
          <Text style={styles.fontStyle2}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={()=>{addNumeros('6')}}>
          <Text style={styles.fontStyle2}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{addNumeros('-')}}>
          <Text style={styles.fontStyle}>-</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.fileira}>
        <TouchableOpacity style={styles.button2} onPress={()=>{addNumeros('1')}}>
          <Text style={styles.fontStyle2}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={()=>{addNumeros('2')}}>
          <Text style={styles.fontStyle2}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={()=>{addNumeros('3')}}>
          <Text style={styles.fontStyle2}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{addNumeros('+')}}>
          <Text style={styles.fontStyle}>+</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.fileira}>
        <TouchableOpacity style={styles.button2} onPress={()=>{addNumeros('0')}}>
          <Text style={styles.fontStyle2}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={()=>{addNumeros('(')}}>
          <Text style={styles.fontStyle2}>(</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={()=>{addNumeros(')')}}>
          <Text style={styles.fontStyle2}>)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>operar()}>
          <Text style={styles.fontStyle}>=</Text>
        </TouchableOpacity>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:'90%',
    height:100,
    borderRadius:5,
    fontSize:55,
    color:'#fff',
    backgroundColor:'#78BFEB',
    marginBottom:15,
    textAlign:'right'

  },
  button:{
    width:70,
    height:70,
    backgroundColor:'#289DEA',
    borderRadius:45,
    alignItems:'center',
    textAlign:'center',
    justifyContent: 'center',
    margin:5,
    
  },

  button2:{
    width:70,
    height:70,
    backgroundColor:'#FFF',
    borderRadius:45,
    alignItems:'center',
    textAlign:'center',
    justifyContent: 'center',
    margin:5,
    
  },

  button3:{
    width:70,
    height:70,
    backgroundColor:'#000',
    borderRadius:45,
    alignItems:'center',
    textAlign:'center',
    justifyContent: 'center',
    margin:5,
    
  },


  fontStyle:{
    fontSize:25,
    fontWeight:'600',
    color:'#fff'
  },

  fontStyle2:{
    fontSize:25,
    fontWeight:'600',
    color:'#000'
  },

  fileira:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
