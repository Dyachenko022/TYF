import React from "react";
import { Dimensions } from "react-native";
import {
  Text,
  Link,
  HStack,
  Center,
  Box,
  Row,
  Heading,
  Avatar,
  Switch,
  Image,
  useColorMode,
  Icon,
  Input,
  Button,
  ScrollView,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { AntDesign, Feather } from '@expo/vector-icons';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {

  const IconHolder = (
    <Box height={110}>
      <Icon style={{color: colors.lightBlue}} as={<Feather name='plus' pr={4}/>} size='4xl'/>
    </Box>
  )

  const AvatarIcon = (
    <Box height={110}>
      <Icon style={{color: colors.lightBlue}} as={<Feather name='user' pr={4}/>} size='4xl'/>
    </Box>
  )

  const UserAvatar = (
    <Avatar size='xl' source={require('./assets/avatar_placeholder_male.png')} mb={3} borderRadius={100} borderColor='secondary.500' borderWidth={3} />
  )

  return (
    <NativeBaseProvider>
        <ScrollView flex={1} h='full' style={{backgroundColor: colors.purple}}>
          <VStack space={5} alignItems="center"  flex={1}>
            {mastheadWelcomeScreen()}
            <VStack flex={1} pt={25} space={1} h='full' w='full' mt={-10} p={4} borderTopLeftRadius='20px' borderTopRightRadius='20px' overflow='hidden' style={{backgroundColor: colors.purple}}>
              {welcomeScreen()}
            </VStack>
          </VStack>
        </ScrollView>
    </NativeBaseProvider>
  );
}

const mainScreen = () => {
  return (
    <Row w='full' space={3} p={2} alignItems='center' justifyContent='center'>  
      {button('Добавить трату', colors.headerBlue)}
      {button('Добавить заработок', colors.lightGreen)}
    </Row>
  )
}

const mastheadPurchase = () => {
  return (
    <VStack h='300px' w='full' style={{backgroundColor: colors.headerBlue}} py={7} justifyContent='center' alignItems='center'>
      <Box flex={1} />
      <Heading color='white' w='90%'  size='xl' shadow={1} >
        Добавление новой траты
      </Heading>
    </VStack>
  )
}

const mastheadWelcomeScreen = () => {
  return (
    <VStack h='150px' w='full' style={{backgroundColor: colors.headerBlue}} py={7} justifyContent='center' alignItems='center'>
      <Box flex={1} />
      <Heading color='white' w='90%'  size='xl' shadow={1} >
        Добро пожаловать
      </Heading>
    </VStack>
  )
}

const mastheadEarnings = () => {
  return (
    <VStack h='300px' w='full' style={{backgroundColor: colors.headerBlue}} py={7} justifyContent='center' alignItems='center'>
      <Box flex={1} />
      <Heading color='white' w='90%'  size='xl' shadow={1} textAlign='center'>
        Поступление нового дохода
      </Heading>
    </VStack>
  )
}

const welcomeScreen = () => {
  return (
    <Box alignItems='center'>
      <Row w='full' alignItems='center' justifyContent='center' space={10}>
        <Text shadow={1} style={{color: colors.lightBlue, borderColor: colors.lightGreen}} fontSize={72}>
          T
        </Text>
        <Text shadow={1} style={{color: colors.lightBlue, borderColor: colors.lightGreen}} fontSize={72}>
          Y
        </Text>
        <Text shadow={1} style={{color: colors.lightBlue, borderColor: colors.lightGreen}} fontSize={72}>
          F
        </Text>
      </Row>
      <Text style={{color: colors.lightBlue, borderColor: colors.lightGreen}} fontSize={16} bold>
        Track           your       finances
      </Text>

      <Text style={{color: colors.lightBlue, borderColor: colors.lightGreen}} py={10} fontSize={16} bold>
        Ваш личный планировщик бюджетов
      </Text>

      <Text style={{color: colors.lightBlue, borderColor: colors.lightGreen}} pt={5} fontSize={16}>
        Удобные графики
      </Text>
      <Text style={{color: colors.lightBlue, borderColor: colors.lightGreen}} pt={5} fontSize={16}>
        Отслеживание доходов и расходов
      </Text>
      <Text style={{color: colors.lightBlue, borderColor: colors.lightGreen}} pt={5} fontSize={16}>
        и многое другое
      </Text>
      <Box flex={1} h={250}/>
      

      <Row px={10} style={{backgroundColor: colors.headerBlue}} w={'full'} h={50} m={5} alignItems='center' justifyContent='center' borderRadius={50}>
        <Text shadow={1} style={{color: colors.lightBlue, borderColor: colors.lightGreen}} fontSize={18}>
          Начать
        </Text>
      </Row>
    </Box>
  )
}

const mastheadVerificationScreen = () => {
  return (
    <VStack h='300px' w='full' style={{backgroundColor: colors.headerBlue}} py={7} justifyContent='center' alignItems='center'>
      <Box flex={1} />
      <Heading color='white' w='90%'  size='xl' shadow={1} >
        Подтверждение аккаунта
      </Heading>
    </VStack>
  )
}

const verificationScreen = () => {
  return (
    <Box p={4} alignItems='center' justifyContent='center'>
      <Text bold style={{color: colors.lightGreen, borderColor: colors.lightGreen}} fontSize={24} textAlign='center'>
        На указанный адрес электронной почты было выслано письмо с кодом подтверждения
      </Text>

      <Row w='full' mx={10} mt={10} borderRadius={10} space={2} h={50} borderWidth={1} style={{borderColor: colors.lightGreen}} alignItems='flex-end' justifyContent='center' p={2}>
        <Box  borderBottomWidth={2} w={5} style={{borderBottomColor: colors.lightGreen}} />
        <Box  borderBottomWidth={2} w={5} style={{borderBottomColor: colors.lightGreen}} />
        <Box  borderBottomWidth={2} w={5} style={{borderBottomColor: colors.lightGreen}} />
        <Box  borderBottomWidth={2} w={5} style={{borderBottomColor: colors.lightGreen}} />
      </Row>   
      <Row px={10} style={{backgroundColor: colors.headerBlue}} w={'full'} h={50} mt={5} alignItems='center' justifyContent='center' borderRadius={50}>
        <Icon shadow={1} style={{color: colors.lightBlue}} as={<Feather name='send' pr={4}/>} size='md' mr={5}/>
        <Text shadow={1} style={{color: colors.lightBlue, borderColor: colors.lightGreen}} fontSize={16}>
          Отправить
        </Text>
      </Row>   
    </Box>
  )
}

const addnewPurchase = () => {
  return (
    <Box flex={1}>
      <Row w='full' mt={5} borderRadius={10} h={50} borderWidth={1} style={{borderColor: colors.lightGreen}} alignItems='center' justifyContent='flex-start' px={2}>
        <Icon style={{color: colors.lightBlue}} as={<Feather name='credit-card' pr={4}/>} size='md' mr={5}/>
        <Text style={{color: colors.lightBlue, borderColor: colors.lightBlue}} fontSize={16}>Стоимость</Text>
      </Row>
      <Row w='full' mt={5} borderRadius={10} h={50} borderWidth={1} style={{borderColor: colors.lightGreen}} alignItems='center' justifyContent='flex-start' px={2}>
        <Icon style={{color: colors.lightBlue}} as={<Feather name='archive' pr={4}/>} size='md' mr={5}/>
        <Text style={{color: colors.lightBlue, borderColor: colors.lightBlue}} fontSize={16}>Категория</Text>
      </Row>
      <Row px={10} style={{backgroundColor: colors.lightBlue}} w={'full'} h={75} mt={5} alignItems='center' justifyContent='center' borderRadius={50}>
        <Icon style={{color: colors.darkGreen}} as={<Feather name='alert-circle' pr={4}/>} size='lg' mr={5}/>
        <Text style={{color: colors.darkGreen, borderColor: colors.lightGreen}} fontSize={14}>
          Учтите, что неправильный выбор категории повлияет на оценку трат
        </Text>
      </Row>
      <Row px={10} style={{backgroundColor: colors.headerBlue}} w={'full'} h={75} mt={5} alignItems='center' justifyContent='center' borderRadius={50}>
        <Icon shadow={1} style={{color: colors.lightBlue}} as={<Feather name='plus' pr={4}/>} size='lg' mr={5}/>
        <Text shadow={1} style={{color: colors.lightBlue, borderColor: colors.lightGreen}} fontSize={16}>
          Добавить
        </Text>
      </Row>
    </Box>
  )
}

const addnewEarnings = () => {
  return (
    <Box flex={1}>
      <Row w='full' mt={5} borderRadius={10} h={50} borderWidth={1} style={{borderColor: colors.lightGreen}} alignItems='center' justifyContent='flex-start' px={2}>
        <Icon style={{color: colors.lightBlue}} as={<Feather name='credit-card' pr={4}/>} size='md' mr={5}/>
        <Text style={{color: colors.lightBlue, borderColor: colors.lightBlue}} fontSize={16}>Сумма</Text>
      </Row>
      <Row w='full' mt={5} borderRadius={10} h={50} borderWidth={1} style={{borderColor: colors.lightGreen}} alignItems='center' justifyContent='flex-start' px={2}>
        <Icon style={{color: colors.lightBlue}} as={<Feather name='archive' pr={4}/>} size='md' mr={5}/>
        <Text style={{color: colors.lightBlue, borderColor: colors.lightBlue}} fontSize={16}>Категория</Text>
      </Row>
      <Row px={10} style={{backgroundColor: colors.lightBlue}} w={'full'} h={75} mt={5} alignItems='center' justifyContent='center' borderRadius={50}>
        <Icon style={{color: colors.darkGreen}} as={<Feather name='alert-circle' pr={4}/>} size='lg' mr={5}/>
        <Text style={{color: colors.darkGreen, borderColor: colors.lightGreen}} fontSize={14}>
          Учтите, что неправильный выбор категории повлияет на оценку доходов
        </Text>
      </Row>
      <Row px={10} style={{backgroundColor: colors.headerBlue}} w={'full'} h={75} mt={5} alignItems='center' justifyContent='center' borderRadius={50}>
              <Icon shadow={1} style={{color: colors.lightBlue}} as={<Feather name='plus' pr={4}/>} size='lg' mr={5}/>
              <Text shadow={1} style={{color: colors.lightBlue, borderColor: colors.lightGreen}} fontSize={16}>
                Добавить
              </Text>
            </Row>
    </Box>
  )
}

const masthead = () => {
  return (
    <VStack h='300px' w='full' style={{backgroundColor: colors.headerBlue}} pb={5} borderTopLeftRadius={25} borderTopRightRadius={25}>
      <Box flex={1} pt={10} px={5}>
        <Heading color='white' w='90%'  size='xl' shadow={1} >
          Здравствуйте, Герман!
        </Heading>
      </Box>
      <Row justifyContent='space-between' px={3} alignItems='center'>
        <Box>
          <Text bold style={{color: colors.lightGreen, borderColor: colors.lightGreen}} fontSize={24}>Текущие траты</Text>
          <Text bold style={{color: colors.lightGreen, borderColor: colors.lightGreen}} fontSize={24}>₽ 19 265,57</Text>
          <Text bold style={{color: colors.lightGreen, borderColor: colors.lightGreen}} fontSize={24} mt={3}>Текущий заработок</Text>
          <Text bold style={{color: colors.lightGreen, borderColor: colors.lightGreen}} fontSize={24}>₽ 15 300,00</Text>
        </Box>
        <Box alignItems='flex-end' p={3}>
          <Text bold style={{color: colors.lightGreen, borderColor: colors.lightGreen}} fontSize={24}>$ 83.65</Text>
          <Text bold style={{color: colors.lightGreen, borderColor: colors.lightGreen}} fontSize={24}>€ 96.34</Text>
          <Box style={{borderColor: colors.lightBlue}} borderBottomWidth={1}>
            <Text style={{color: colors.lightBlue, borderColor: colors.lightBlue}} fontSize={16} borderBottomWidth={1}>Добавить валюту</Text>
          </Box>
        </Box>
      </Row>
    </VStack>
  )
}

const alertButton = () => {
  return (
    <Row px={10} style={{backgroundColor: colors.lightBlue}} w={'full'} h={75} mt={5} alignItems='center' justifyContent='center' borderRadius={50}>
      <Icon style={{color: colors.darkGreen}} as={<Feather name='alert-circle' pr={4}/>} size='lg' mr={5}/>
      <Text style={{color: colors.darkGreen, borderColor: colors.lightGreen}} fontSize={14}>
        Ваши расходы превышают ваш заработок, посмотрите как можно сэкономить деньги
      </Text>
    </Row>
  )
}

const _renderAccountHolder = (child: any, text: string) => {
  return(
    <VStack space={3} w={165} h={200} backgroundColor={'blueGray.700'} alignItems='center' justifyContent='center' shadow={3} borderRadius={10}>
      {child}
      {text}
    </VStack>
  )
}


const chart = () => {
  const data = {
    labels: ["Кафе", "Такси", "Другое"], // optional
    data: [0.4, 0.6, 0.8]
  };

 return (
   <Box style={{backgroundColor: colors.lightBlue}} w={'full'} h={250} alignItems='center' justifyContent='center' borderRadius={15} >
     <ProgressChart
      data={data}
      width={375}
      height={220}
      strokeWidth={16}
      radius={25}
      chartConfig={{
        backgroundColor: colors.lightBlue,
        backgroundGradientFrom: colors.lightBlue,
        backgroundGradientTo: colors.lightBlue,
        color: (opacity = 1) => `rgba(137,152,120, ${opacity})`,
        labelColor: (opacity = 1) => colors.darkGreen,
        style: {
          borderRadius: 16,
          justifyContent: 'flex-start'
        }
      }}
      hideLegend={false}
    />
   </Box>
 )
}

const lineChart = () => {
  const data = {
    labels: ["Январь", "Март", "Апрель", "Май"],
    datasets: [
      {
        data: [456.65, 1212.3, 315.4, 578],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      },
    ],


  };

  return (
    <Box style={{backgroundColor: colors.lightBlue}} w={'full'} h={275} alignItems='center' justifyContent='center' borderRadius={15}>
      <Text style={{color: colors.darkGreen, borderColor: colors.lightGreen}} p={2} fontSize={14}>
        Ваши траты по датам, $
      </Text>
      <LineChart
        data={data}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: colors.lightBlue,
          backgroundGradientFrom: colors.lightBlue,
          backgroundGradientTo: colors.lightBlue,
          color: (opacity = 1) => `rgba(137,152,120, ${opacity})`,
          labelColor: (opacity = 1) => colors.darkGreen,
          style: {
            borderRadius: 16,
            justifyContent: 'flex-start'
          }
        }}
      />
    </Box>
  )
}

const helperText = () => {
  return (
    <Row px={10} style={{backgroundColor: colors.lightBlue}} w={'full'} h={75} mt={5} alignItems='center' justifyContent='center' borderRadius={50} >
      <Icon style={{color: colors.darkGreen}} as={<Feather name='alert-circle' pr={4}/>} size='lg' mr={5}/>
      <Text style={{color: colors.darkGreen, borderColor: colors.lightGreen}} fontSize={14}>Ваши траты превышают ваш бюджет, посмотрите как сохранить деньги</Text>
   </Row>
  )
}

const button = (text: string, color: string) => {
  return (
    <Row px={10} style={{backgroundColor: color}} w={'50%'} h={75} mt={5} alignItems='center' justifyContent='center' borderRadius={50}>
      <Icon shadow={1} style={{color: colors.lightBlue}} as={<Feather name='plus' pr={4}/>} size='lg' mr={5}/>
      <Text shadow={1} style={{color: colors.lightBlue, borderColor: colors.lightGreen}} fontSize={16}>
        {text}
      </Text>
    </Row>
  )
}

const colors = {
  purple: '#121113',
  lightBlue: '#F7F7F2',
  headerBlue: '#899878',
  darkGreen: '#222725',
  lightGreen: '#E4E6C3'
}