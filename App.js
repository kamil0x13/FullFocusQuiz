//System sterowanie paskiem statusu Androind/IOS
import { StatusBar } from 'expo-status-bar';
//React, + obiekt komponętu potrzebny do klasy
import React, { Component } from 'react';
//Komponenty natywne
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
//System Pamięci, local cache
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {
  state = {
    screen: "0",
    etap: "1",
    questionNumber: 1,
    randoms: {
      l1: [],
      l2: [],
      l3: [],
      l4: [],
    },
  }

  //Pierwsze wczytanie aplikacji, ładowanie danych ekranu
  loadState = async () => {
    await AsyncStorage.multiSet(
      [
        [
          "questions-1",
          JSON.stringify(
            [
              { question: `"Chociaż najczęściej przybiera humanoidalną postać w każdej chwili może zmienić się w przerażającego smoka, który spopiela wrogów ognistym oddechem." O kim mowa w historii?`, a: "Lee Sin", b: "Shyvana", c: "Rumble", d: "Brand", odp: "b" },
              { question: `Na kogo poluje Kaha'Zix?`, a: "Rengar", b: "Lucian", c: "Udyr", d: "Ahri", odp: "a" },
              { question: `Która z tych postaci nie pochodzi z Noxusu?`, a: "Swain", b: "Katarina", c: "Darius", d: "Jinx", odp: "d" },
              { question: `Która z tych postaci nie pochodzi z Demacji?`, a: "Lux", b: "Garen", c: "Darius", d: "Jarvan IV", odp: "c" },
              { question: `Ile kosztuje Doran's Ring?`, a: "350", b: "400", c: "450", d: "425", odp: "b" },
              { question: `Ile kosztuje Doran's Blade(Ostrze Dorana)?`, a: "350", b: "400", c: "450", d: "425", odp: "c" },
              { question: `Która z podanych postaci przestrzega Kodeksu Harcerzy z Bandle City?`, a: "Teemo", b: "Annie", c: "Gragas", d: "Tristiana", odp: "a" },
              { question: `Jak nazywa się duszek Lulu?`, a: "Rie", b: "Pix", c: "Wix", d: "Lulix", odp: "b" },
              { question: `Jaka drużyna wygrała Worlds 2020?`, a: "Fnatic", b: "G2 Esports", c: "Suning", d: "DAMWON", odp: "d" },
              { question: `W której minucie pojawia się Baron Nashor?`, a: "15", b: "25", c: "20", d: "18", odp: "c" },
              { question: `"Jej naturalne zamiłowanie do ognia uzewnętrzniło się wcześnie pod postacią nieprzewidywalnych wybuchów emocji. Jednakże nauczyła się kontrolować te sztuczki." O kim mowa?`, a: "Sivir", b: "Brand", c: "Annie", d: "Katarina", odp: "c" }
            ]
          )
        ],
        [
          "questions-2",
          JSON.stringify(
            [
              { question: `Ile pająków może przyzwać Elise na pierwszym poziomie?`, a: "5", b: "4", c: "2", d: "0", odp: "c" },
              { question: `Przywódcą jakiego zakonu jest Shen?`, a: "Cienia", b: "Kinkou", c: "Kinou", d: "Kinkaku", odp: "b" },
              { question: `Jak się nazywa siostra Katariny?`, a: "Cassiopeia", b: "Akali", c: "Annie", d: "Jinx", odp: "a" },
              { question: `Który z tych championów nie był odstępny od startu gry [27.10.2009]?`, a: "Lee Sin", b: "Gankplank", c: "Dr. Mundo", d: "Master Yi", odp: "a" },
              { question: `Która postać posiada największą bazową ilość życia na pierwszym poziomie?`, a: "Tryndamere", b: "Kled", c: "Trundle", d: "Garen", odp: "b" },
              { question: `Który z podanych championów jest nazwany imieniem/pseudonimem pracownika Riot Games?`, a: "Sona", b: "Annie", c: "Renekton", d: "Tryndamere", odp: "d" },
              { question: `W którym roku odbyły się pierwsze Mistrzostwa Świata w Leguage of Legends?`, a: "2009", b: "2010", c: "2011", d: "2012", odp: "c" },
              { question: `Ile razy drużyna STK T1 z Fakerem w składzie wygrała mistrzostwa świata?`, a: "0", b: "1", c: "2", d: "3", odp: "d" },
              { question: `Ile energii posiada Akali?`, a: "100", b: "150", c: "200", d: "250", odp: "c" },
              { question: `Ile rang systemu ligowego jest dostępnych w grze League of Legends?`, a: "9", b: "6", c: "7", d: "10", odp: "a" },
              { question: `W którym roku powstał tryb rozgrywki Teamfight Tactics?`, a: "2017", b: "2018", c: "2019", d: "2020", odp: "c" },
              { question: `Gdzie odbyły się Mistrzostwa Świata League of Legends w 2020 roku?`, a: "USA", b: "Chiny", c: "Rosja", d: "Wielka Brytania", odp: "b" },
              { question: `Która z tych postaci wypowiada te słowa? „Wolisz dobrego glinę czy złego?”`, a: "Graves", b: "Caitlyn", c: "Volibear", d: "Trundle", odp: "b" },
              { question: `Która z tych postaci wypowiada te słowa? „Śmierć nie jest końcem podróży, jest dopiero początkiem...”`, a: "Thresh", b: "Kassadin", c: "Karthus", d: "Trundle", odp: "c" },
              { question: `Który z wymienionych przedmiotów nie dodaje obrażeń od ataku?`, a: "Long Sword [Długi miecz]", b: "Pickaxe [Kilof]", c: "Manamune", d: "Night Harvester [Nocny Żniwiarz]", odp: "d" }

            ]
          )
        ],
        [
          "questions-3",
          JSON.stringify(
            [
              { question: "Jakim wynikiem zakończył się Finał Worlds 2020, pomiędzy DAMWON Gaming i Suning?", a: "1:2", b: "2:1", c: "1:3", d: "3:1", odp: "d" },
              { question: "Jakie poziomy trudności mamy do wyboru w trybie Razem przeciwko SI?", a: "Wstęp, początkujący, średnio-zaawans.", b: "Łatwy, średni, trudny", c: "Wstęp, oczątkujący, średnio-zaawans., trudny", d: "Samouczek, wstęp, średnio-zaawans., trudny", odp: "a" },
              { question: "Która z postaci prowadziła przestępcze życie a teraz pracuje dla Strażników, pilnując pokoju w Piltover?", a: "Kayl", b: "Vi", c: "Taric", d: "Graves", odp: "b" },
              { question: "Jaki jest zakres zasięgów podstawowych jednostek walczących w zwarciu?", a: "200-300", b: "25-300", c: "300-400", d: "125-250", odp: "d" },
              { question: "Ile punktów obrażeń od ataku daje Pickaxe [Kilof]?", a: "20", b: "15", c: "25", d: "30", odp: "c" },
              { question: "Ile razy w jednej grze można pokonać Rift Heralda?", a: "1", b: "2", c: "3", d: "4", odp: "b" },
              { question: "Co najmniej ile postaci trzeba posiadać, aby móc zagrać rankeda ?", a: "14", b: "11", c: "25", d: "20", odp: "d" },
              { question: "Jaką ilość zdrowia posiada Outer turret?", a: "5000", b: "4500", c: "6000", d: "4000", odp: "a" },
              { question: "„Piękno także jest potęgą, i może uderzyć mocniej niż jakikolwiek miecz”. Kogo to słowa?", a: "Katarina", b: "Evelynn", c: "Elise", d: "Ahri", odp: "c" },
              { question: "Ile nóg ma Urgot?", a: "8", b: "6", c: "2", d: "9", odp: "b" },
              { question: "Jakie państwo dokonało słynnej inwazji na Ionię?", a: "Bilgewater", b: "Imperium Shurimy", c: "Noxus", d: "Freljord", odp: "c" },
              { question: "Kto wygrał Mistrzostwa Świata League of Legends Sezon 1?", a: "Fanatic", b: "against All authority", c: "Team SoloMid", d: "Epik Gamer", odp: "a" },
              { question: `"Chłopiec. Który ujarzmił czas." Czyj to opis?`, a: "Zilean", b: "Ryze", c: "Jayce", d: "Ekko", odp: "d" },
              { question: "Ile Riot Points otrzymuje się za 10 zł?", a: "480", b: "380", c: "430", d: "310", odp: "d" },
              { question: "Jaką ilość zdrowia posiada Outer turret?", a: "5000", b: "4500", c: "6000", d: "4000", odp: "a" }
            ]
          )
        ],
        [
          "questions-4",
          JSON.stringify(
            [
              { question: "W którym roku Jankos dołączył do Team ROCCAT?", a: "2016", b: "2014", c: "2017", d: "2010", odp: "b" },
              { question: "Jaka postać jako pierwsza posiadała 11 skinów?", a: "Fizz", b: "Jax", c: "Annie", d: "Fiora", odp: "c" },
              { question: "Przez którą postać runiczne ostrze Riven zostało zaklęte?", a: "LeBlanc", b: "Veigar", c: "Viktor", d: "Kassadin", odp: "a" },
              { question: `Jaki zasięg posiada umiejetność "Shuriken Flip" [Salto Shurikena] Akali?`, a: "825", b: "700", c: "950", d: "650", odp: "a" },
              { question: `Jak naprawdę ma na imię Miss Fortune?`, a: "Camilla", b: "Karen", c: "Sarah", d: "Michelle", odp: "c" },
              { question: `Kiedy został wydany Braum?`, a: "2012-08-23", b: "2014-05-12", c: "2013-11-13", d: "2015-02-04", odp: "b" },
              { question: `"Kiedyś tańczyłam tylko dla siebie. Teraz tańczę za Pierwotną Krainę." Kto wypowiada te słowa?`, a: "Irelia", b: "Karma", c: "Katarina", d: "Kalista", odp: "a" },
              { question: "Co ile ataków podstawowych Baron Nashor używa umiejętności?", a: "3", b: "4", c: "5", d: "6", odp: "d" },
              { question: "Z jakiej odległości Caitlin potrafiła trafić królika w oko?", a: "50 jardów", b: "400 jardów", c: "250 jardów", d: "300 jardów", odp: "d" }
            ]
          )
        ]
      ]
    )
    const screen = await AsyncStorage.getItem('screen')
    const etap = await AsyncStorage.getItem('etap')
    const etap1Points = JSON.parse(await AsyncStorage.getItem("etap1Points"))
    const etap2Points = JSON.parse(await AsyncStorage.getItem("etap2Points"))
    this.setState({ loaded: true, screen: screen ? screen : "0", etap: etap ? etap : "1", etap1Points, etap2Points })
  }

  loadGame1 = async () => {
    const questions1 = JSON.parse(await AsyncStorage.getItem("questions-1"))
    const questions2 = JSON.parse(await AsyncStorage.getItem("questions-2"))
    const questions3 = JSON.parse(await AsyncStorage.getItem("questions-3"))
    const questions4 = JSON.parse(await AsyncStorage.getItem("questions-4"))

    const question = JSON.parse(await AsyncStorage.getItem('question'))

    const info = JSON.parse(await AsyncStorage.getItem("info"))
    const helpHalf = JSON.parse(await AsyncStorage.getItem("helpHalf"))
    let questionNumber = await AsyncStorage.getItem('questionNumber')
    let wariant = await AsyncStorage.getItem(`wariant`)
    const isGood = await AsyncStorage.getItem("isGood")
    const odp = JSON.parse(await AsyncStorage.getItem("odp"))
    const questionPoints = await AsyncStorage.getItem("questionPoints")
    let etap1Points = await AsyncStorage.getItem("etap1Points")
    if (!etap1Points) {
      etap1Points = "50"
    }
    questionNumber = questionNumber ? JSON.parse(questionNumber) : 1
    etap1Points = JSON.parse(etap1Points)
    this.setState({ helpHalf, question, isGood, odp, info, questionPoints, questionNumber, etap1Points, wariant, questions1, questions2, questions3, questions4, loadGame: true })
  }

  loadGame2 = async () => {
    const questions1 = JSON.parse(await AsyncStorage.getItem("questions-1"))
    const questions2 = JSON.parse(await AsyncStorage.getItem("questions-2"))
    const questions3 = JSON.parse(await AsyncStorage.getItem("questions-3"))
    const questions4 = JSON.parse(await AsyncStorage.getItem("questions-4"))

    let question = JSON.parse(await AsyncStorage.getItem('question'))
    let randoms = null
    let random = null
    if (!question) {
      random = Math.floor(Math.random() * questions1.length)
      for (; this.state.randoms.l1.includes(random);) {
        random = Math.floor(Math.random() * questions1.length)
      }
      randoms = this.state.randoms
      randoms.l1.push(random)
      await AsyncStorage.setItem("question", JSON.stringify(questions1[random]))
      await AsyncStorage.setItem("passiv", JSON.stringify(true))
    }

    const info = JSON.parse(await AsyncStorage.getItem("info"))
    const helpHalf = JSON.parse(await AsyncStorage.getItem("helpHalf"))
    const checkAnswer = JSON.parse(await AsyncStorage.getItem("checkAnswer"))
    let questionNumber = await AsyncStorage.getItem('questionNumber')
    const isGood = await AsyncStorage.getItem("isGood")
    const odp = JSON.parse(await AsyncStorage.getItem("odp"))
    const questionPoints = await AsyncStorage.getItem("questionPoints")
    let etap2Points = await AsyncStorage.getItem("etap2Points")
    if (!etap2Points) {
      etap2Points = "0"
    }
    questionNumber = questionNumber ? JSON.parse(questionNumber) : 1
    etap2Points = JSON.parse(etap2Points)
    if (randoms) {
      await AsyncStorage.setItem("questionPoints", "20")
      this.setState({ checkAnswer, helpHalf, passiv: true, question, isGood, odp, info, questionPoints: "20", questionNumber, etap2Points, questions1, questions2, questions3, questions4, loadGame2: true, etap: "2", question: questions1[random], randoms })
    } else {
      this.setState({ checkAnswer, helpHalf, question, isGood, odp, info, questionPoints, questionNumber, etap2Points: etap2Points ? etap2Points : 0, questions1, questions2, questions3, questions4, loadGame2: true, etap: "2" })
    }
  }

  wariant = async (wariant, questionPoints) => {
    AsyncStorage.setItem("wariant", wariant)
    if (wariant === "1") {
      let random = Math.floor(Math.random() * this.state.questions1.length)
      for (; this.state.randoms.l1.includes(random);) {
        random = Math.floor(Math.random() * this.state.questions1.length)
      }
      let randoms = this.state.randoms
      randoms.l1.push(random)
      await AsyncStorage.setItem("question", JSON.stringify(this.state.questions1[random]))
      this.setState({ wariant, questionPoints, question: this.state.questions1[random], randoms });
    } else if (wariant === "2") {
      let random = Math.floor(Math.random() * this.state.questions2.length)
      for (; this.state.randoms.l2.includes(random);) {
        random = Math.floor(Math.random() * this.state.questions2.length)
      }
      let randoms = this.state.randoms
      randoms.l2.push(random)
      await AsyncStorage.setItem("question", JSON.stringify(this.state.questions2[random]))
      this.setState({ wariant, questionPoints, question: this.state.questions2[random] });
    } else if (wariant === "3") {
      let random = Math.floor(Math.random() * this.state.questions3.length)
      for (; this.state.randoms.l3.includes(random);) {
        random = Math.floor(Math.random() * this.state.questions3.length)
      }
      let randoms = this.state.randoms
      randoms.l3.push(random)
      await AsyncStorage.setItem("question", JSON.stringify(this.state.questions3[random]))
      this.setState({ wariant, questionPoints, question: this.state.questions3[random] });
    } else {
      let random = Math.floor(Math.random() * this.state.questions4.length)
      for (; this.state.randoms.l4.includes(random);) {
        random = Math.floor(Math.random() * this.state.questions4.length)
      }
      let randoms = this.state.randoms
      randoms.l4.push(random)
      await AsyncStorage.setItem("question", JSON.stringify(this.state.questions4[random]))
      this.setState({ wariant, questionPoints, question: this.state.questions4[random] });
    }
    AsyncStorage.setItem("questionPoints", questionPoints)
  }

  answered = async (odp) => {
    if (odp === this.state.question.odp) {
      const etap1Points = (this.state.etap1Points + JSON.parse(this.state.questionPoints))
      await AsyncStorage.setItem("etap1Points", JSON.stringify(etap1Points))
      await AsyncStorage.setItem("isGood", "1")
      await AsyncStorage.setItem("odp", JSON.stringify(odp))
      this.setState({ isGood: "1", etap1Points, odp })
    } else {
      let etap1Points = (this.state.etap1Points - (JSON.parse(this.state.questionPoints) / 2))
      if (etap1Points < 0) {
        etap1Points = 0
      }
      await AsyncStorage.setItem("etap1Points", JSON.stringify(etap1Points))
      await AsyncStorage.setItem("isGood", "2")
      await AsyncStorage.setItem("odp", JSON.stringify(odp))
      this.setState({ isGood: "2", etap1Points, odp })
    }
  }

  answered2 = async (odp) => {
    if (odp === this.state.question.odp) {
      const etap2Points = (this.state.etap2Points + JSON.parse(this.state.questionPoints))
      await AsyncStorage.setItem("etap2Points", JSON.stringify(etap2Points))
      await AsyncStorage.setItem("isGood", "1")
      await AsyncStorage.setItem("odp", JSON.stringify(odp))
      this.setState({ isGood: "1", etap2Points, odp })
    } else {
      if (this.state.passiv) {
        await AsyncStorage.setItem("passiv", JSON.stringify(false))
        await AsyncStorage.setItem("isGood", "2")
        await AsyncStorage.setItem("odp", JSON.stringify(odp))
        this.setState({ isGood: "2", odp, passiv: false })
      } else {
        await AsyncStorage.setItem("lose", JSON.stringify(true))
        await AsyncStorage.setItem("isGood", "2")
        await AsyncStorage.setItem("odp", JSON.stringify(odp))
        this.setState({ isGood: "2", odp, lose: true })
      }
    }
  }

  nextOne = async () => {
    const questionNumber = this.state.questionNumber + 1
    await AsyncStorage.multiRemove(["isGood", "wariant"])
    await AsyncStorage.setItem("questionNumber", JSON.stringify(questionNumber))
    this.setState({ isGood: null, wariant: null, questionNumber, odp: null, helpHalf1: null, helpHalf2: null })
  }

  nextOne2 = async () => {
    if (this.state.lose) {
      this.endEtap2()
    } else {

      let questionPoints = "0"
      const questionNumber = this.state.questionNumber + 1
      await AsyncStorage.multiRemove(["isGood"])
      await AsyncStorage.setItem("questionNumber", JSON.stringify(questionNumber))
      if (questionNumber <= 6) {
        questionPoints = "20"
        let random = Math.floor(Math.random() * this.state.questions1.length)
        for (; this.state.randoms.l1.includes(random);) {
          random = Math.floor(Math.random() * this.state.questions1.length)
        }
        let randoms = this.state.randoms
        randoms.l1.push(random)
        await AsyncStorage.setItem("question", JSON.stringify(this.state.questions1[random]))
        this.setState({ questionPoints, question: this.state.questions1[random], randoms, isGood: null, questionNumber, odp: null, helpHalf1: null, helpHalf2: null, helpHalf3: null });
      } else if (questionNumber <= 12) {
        questionPoints = "40"
        let random = Math.floor(Math.random() * this.state.questions2.length)
        for (; this.state.randoms.l2.includes(random);) {
          random = Math.floor(Math.random() * this.state.questions2.length)
        }
        let randoms = this.state.randoms
        randoms.l2.push(random)
        await AsyncStorage.setItem("question", JSON.stringify(this.state.questions2[random]))
        this.setState({ questionPoints, question: this.state.questions2[random], randoms, isGood: null, questionNumber, odp: null, helpHalf1: null, helpHalf2: null, helpHalf3: null });
      } else if (questionNumber <= 16) {
        questionPoints = "80"
        let random = Math.floor(Math.random() * this.state.questions3.length)
        for (; this.state.randoms.l3.includes(random);) {
          random = Math.floor(Math.random() * this.state.questions3.length)
        }
        let randoms = this.state.randoms
        randoms.l3.push(random)
        await AsyncStorage.setItem("question", JSON.stringify(this.state.questions3[random]))
        this.setState({ questionPoints, question: this.state.questions3[random], randoms, isGood: null, questionNumber, odp: null, helpHalf1: null, helpHalf2: null, helpHalf3: null });
      } else {
        questionPoints = "100"
        let random = Math.floor(Math.random() * this.state.questions4.length)
        for (; this.state.randoms.l4.includes(random);) {
          random = Math.floor(Math.random() * this.state.questions1.length)
        }
        let randoms = this.state.randoms
        randoms.l4.push(random)
        await AsyncStorage.setItem("question", JSON.stringify(this.state.questions4[random]))
        this.setState({ questionPoints, question: this.state.questions4[random], randoms, isGood: null, questionNumber, odp: null, helpHalf1: null, helpHalf2: null, helpHalf3: null });
      }
      AsyncStorage.setItem("questionPoints", questionPoints)
    }
  }

  //Zmienne usuwanie z pamięci lokalnej: ["isGood", "questionPoints", "wariant", "questionNumber", "question", "odp", "helpHalf"]
  endEtap1 = async () => {
    AsyncStorage.multiRemove(["isGood", "questionPoints", "wariant", "questionNumber", "question", "odp", "helpHalf"])
    AsyncStorage.setItem("etap", "2")
    AsyncStorage.setItem("screen", "0")
    this.setState({ screen: "0", etap: "2", loadGame: null, odp: null, isGood: null, question: null, helpHalf: null, helpHalf1: null, helpHalf2: null })
  }

  //Zmienne usuwanie z pamięci lokalnej: ["isGood", "questionPoints", "wariant", "questionNumber", "question", "odp"]
  endEtap2 = async () => {
    AsyncStorage.multiRemove(["isGood", "questionPoints", "wariant", "questionNumber", "question", "odp", "helpHalf", "checkAnswer"])
    AsyncStorage.setItem("etap", "1")
    AsyncStorage.setItem("screen", "9")
    this.setState({ screen: "9", etap: "1", loadGame2: null, odp: null, isGood: null, question: null, lose: null, helpHalf: null, helpHalf1: null, helpHalf2: null, checkAnswer: null, helpHalf3: null, checkingAnswer: null, checkAnswer: null })
  }

  //Zmienne usuwanie z pamięci lokalnej: ["etap1Points", "etap2Points"]
  endGame = async () => {
    let history = JSON.parse(await AsyncStorage.getItem("history"))
    if (!Array.isArray(history)) {
      history = [[`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`, this.state.etap1Points, this.state.etap2Points]]
    } else {
      history.push([`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`, this.state.etap1Points, this.state.etap2Points])
    }
    AsyncStorage.setItem("history", JSON.stringify(history))

    await AsyncStorage.multiRemove(["etap1Points", "etap2Points"])
    await AsyncStorage.setItem("screen", "0")
    this.setState({ screen: "0", etap1Points: null, etap2Points: null, randoms: { l1: [], l2: [], l3: [], l4: [], } })
  }

  helpHalf = async () => {
    if (this.state.helpHalf3) {
      const etap2Points = (this.state.etap2Points + JSON.parse(this.state.questionPoints))
      await AsyncStorage.setItem("etap2Points", JSON.stringify(etap2Points))
      await AsyncStorage.setItem("isGood", "1")
      await AsyncStorage.setItem("odp", JSON.stringify(odp))
      await AsyncStorage.setItem("helpHalf", JSON.stringify(true))
      this.setState({ isGood: "1", etap2Points, helpHalf: true })
    }
    const array = ["a", "b", "c", "d"]
    const odp = this.state.question.odp
    let random = Math.floor(Math.random() * 4)
    for (; odp === array[random];)
      random = Math.floor(Math.random() * 4)
    const helpHalf1 = array[random]
    random = Math.floor(Math.random() * 4)
    for (; odp === array[random] || array[random] === helpHalf1;)
      random = Math.floor(Math.random() * 4)
    const helpHalf2 = array[random]
    await AsyncStorage.setItem("helpHalf", JSON.stringify(true))
    this.setState({ helpHalf: true, helpHalf1, helpHalf2 })
  }

  checkAnswer = async (odp) => {
    if (odp === this.state.question.odp) {
      const etap2Points = (this.state.etap2Points + JSON.parse(this.state.questionPoints))
      await AsyncStorage.setItem("etap2Points", JSON.stringify(etap2Points))
      await AsyncStorage.setItem("isGood", "1")
      await AsyncStorage.setItem("odp", JSON.stringify(odp))
      await AsyncStorage.setItem("checkAnswer", "1")
      this.setState({ isGood: "1", etap2Points, checkAnswer: true, checkingAnswer: null })
    } else {
      await AsyncStorage.setItem("checkAnswer", "1")
      this.setState({ checkAnswer: true, helpHalf3: odp, checkingAnswer: null })
    }
  }

  loadHistory = async () => {
    const history = JSON.parse(await AsyncStorage.getItem("history"))
    this.setState({ loadHistory: true, history })
  }

  render() {
    //Wczytanie aplikacji, ładowanie danych ekranu
    if (!this.state.loaded) {
      this.loadState()
    }
    switch (this.state.screen) {
      //Menu Start
      case "0":
        return (
          <ImageBackground source={require('./assets/bg2.png')} style={stylesScreen0.container}>
            <View style={stylesScreen0.titleView}>
              <Text style={stylesScreen0.title}>League of Legends Quiz</Text>
            </View>
            <View style={stylesScreen0.etapsView}>
              <Text style={stylesScreen0.etaps}>Etap 1 - {Number.isInteger(this.state.etap1Points) ? `${this.state.etap1Points} / 510` : "nieukończony"}</Text>
              <Text style={stylesScreen0.etaps}>Etap 2 - {Number.isInteger(this.state.etap2Points) ? `${this.state.etap2Points} / 1200` : "nieukończony"}</Text>
              {/* <Text style={stylesScreen0.etaps}>Etap 3 - {Number.isInteger(this.state.etap3Points) ? `${this.state.etap3Points} / 660` : "nieukończony"}</Text> */}
            </View>
            <View style={stylesScreen0.buttonsView}>
              <Text style={stylesScreen0.buttonStart} onPress={() => { this.setState({ screen: this.state.etap, info: true }); AsyncStorage.setItem("screen", this.state.etap); AsyncStorage.setItem("info", JSON.stringify(true)); }}>START</Text>
            </View>
            <View style={stylesScreen0.buttonsView}>
              <Text style={stylesScreen0.buttonHistory} onPress={() => { this.setState({ screen: "10" }) }}>HISTORIA</Text>
            </View>
            <StatusBar style="auto" />
          </ImageBackground>
        )
        break;
      //Etap 1
      case "1":
        if (!this.state.loadGame) {
          this.loadGame1()
        }
        if (this.state.info) {
          return (
            <ImageBackground style={stylesGame1.container} source={require('./assets/bg3.png')} style={stylesScreen0.container}>
              <View style={stylesGame1.infoView}>
                <Text style={stylesGame1.infoTitle}>Zasady etapu pierwszego</Text>
                <Text style={stylesGame1.infoText}>Etap składa się z 9 pytań, podzielonych na 3 rundy: {"\n"}- Runda 1 - 4 pytania, {"\n"}- Runda 2 - 3 pytania, {"\n"}- Runda 3 - 2 pytania. {"\n"}Karzdorazowo otrzymujesz wybór wariantu pytania łatwiejszego lub trudniejszego (wartego więcej punktów). {"\n"}W przypadku błędnej odpowiedzi z stanu punktów zostaje odjęta połowa wartości pytania. {"\n"}Stan punktów nie spadnie poniżej 0. {"\n"}Aby nie było tak trudno otrzymujesz grzybka Teemo usuwającego 2 błędne odpowiedzi.</Text>
                <Text style={stylesGame1.infoButton} onPress={() => { this.setState({ info: false }); AsyncStorage.setItem("info", JSON.stringify(false)) }}>OK</Text>
              </View>
            </ImageBackground>
          )
        }
        if (!this.state.wariant) {
          if (this.state.questionNumber <= 4) {
            return (
              <View style={stylesWariant.container}>
                <Text style={stylesWariant.title}>
                  Wybierz wariant pytania
                </Text>
                <View style={stylesWariant.buttonsView}>
                  <Text style={stylesWariant.buttonE} onPress={() => { this.wariant("1", "10") }}>
                    Łatwy, warty 10 punktów
                  </Text>
                </View>
                <View style={stylesWariant.buttonsView}>
                  <Text style={stylesWariant.buttonH} onPress={() => { this.wariant("2", "20") }}>
                    Średni, warty 20 punktów
                  </Text>
                </View>
              </View>
            )
          } else if (this.state.questionNumber <= 7) {
            return (
              <View style={stylesWariant.container}>
                <Text style={stylesWariant.title}>
                  Wybierz wariant pytania
                </Text>
                <View style={stylesWariant.buttonsView}>
                  <Text style={stylesWariant.buttonE} onPress={() => { this.wariant("2", "40") }}>
                    Średni, warty 40 punktów
                  </Text>
                </View>
                <View style={stylesWariant.buttonsView}>
                  <Text style={stylesWariant.buttonH} onPress={() => { this.wariant("3", "60") }}>
                    Trudny, warty 60 punktów
                  </Text>
                </View>
              </View>
            )
          } else {
            return (
              <View style={stylesWariant.container}>
                <Text style={stylesWariant.title}>
                  Wybierz wariant pytania
                </Text>
                <View style={stylesWariant.buttonsView}>
                  <Text style={stylesWariant.buttonE} onPress={() => { this.wariant("3", "80") }}>
                    Trudny, warty 80 punktów
                  </Text>
                </View>
                <View style={stylesWariant.buttonsView}>
                  <Text style={stylesWariant.buttonH} onPress={() => { this.wariant("4", "100") }}>
                    Bardzo trudny, warty 100 punktów
                  </Text>
                </View>
              </View>
            )
          }
        }
        if (!this.state.isGood) {
          return (
            <View style={stylesGame1.container}>
              <ImageBackground source={require('./assets/Xayah.jpg')} imageStyle={{ resizeMode: 'cover' }} style={stylesGame1.image}>
                <View style={stylesGame1.topBarView}>
                  <Text style={stylesGame1.topBarText}>Pytanie {this.state.questionNumber}</Text>
                  <Text style={stylesGame1.topBarText}>Punkty {this.state.etap1Points}</Text>
                </View>
                <View style={stylesGame1.wariantView}>
                  <Text style={stylesGame1.wariantText}>
                    Wariant {this.state.wariant === "1" ? "łatwy" : this.state.wariant === "2" ? "średni" : "trudny"} warty {this.state.questionPoints} punktów
                </Text>
                  {!this.state.helpHalf ?
                    <View style={stylesGame1.helpView}>
                      <TouchableHighlight onPress={() => { this.helpHalf() }}>
                        <Image style={{ width: 75, height: 75 }} source={require('./assets/t1.webp')} onPress={() => { this.helpHalf() }} />
                      </TouchableHighlight>
                      <Text style={stylesGame1.helpHalfButton} onPress={() => { this.helpHalf() }}> Darmowy</Text>
                    </View>
                    :
                    null
                  }
                </View>
                <View style={stylesGame1.questionView}>
                  <Text style={stylesGame1.questionText}>
                    {this.state.question.question}
                  </Text>
                  {this.state.helpHalf1 === "a" || this.state.helpHalf2 === "a" ?
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswerDisable} >
                        {`A: ${this.state.question.a}`}
                      </Text>
                    </View>
                    :
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswer} onPress={() => { this.answered("a") }} >
                        {`A: ${this.state.question.a}`}
                      </Text>
                    </View>
                  }
                  {this.state.helpHalf1 === "b" || this.state.helpHalf2 === "b" ?
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswerDisable} >
                        {`B: ${this.state.question.b}`}
                      </Text>
                    </View>
                    :
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswer} onPress={() => { this.answered("b") }} >
                        {`B: ${this.state.question.b}`}
                      </Text>
                    </View>
                  }
                  {this.state.helpHalf1 === "c" || this.state.helpHalf2 === "c" ?
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswerDisable} >
                        {`C: ${this.state.question.c}`}
                      </Text>
                    </View>
                    :
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswer} onPress={() => { this.answered("c") }} >
                        {`C: ${this.state.question.c}`}
                      </Text>
                    </View>
                  }
                  {this.state.helpHalf1 === "d" || this.state.helpHalf2 === "d" ?
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswerDisable} >
                        {`D: ${this.state.question.d}`}
                      </Text>
                    </View>
                    :
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswer} onPress={() => { this.answered("d") }} >
                        {`D: ${this.state.question.d}`}
                      </Text>
                    </View>
                  }
                </View>
              </ImageBackground>
            </View>
          )
        } else {
          return (
            <View style={stylesGame1.container}>
              <ImageBackground source={require('./assets/Xayah.jpg')} style={stylesGame1.image}>
                <View style={stylesGame1.topBarView}>
                  <Text style={stylesGame1.topBarText}>Pytanie {this.state.questionNumber}</Text>
                  <Text style={stylesGame1.topBarText}>Punkty {this.state.etap1Points}</Text>
                </View>
                <View style={stylesGame1.wariantView}>
                  <Text style={stylesGame1.wariantText}>
                    Wariant {this.state.wariant === "1" ? "łatwy" : this.state.wariant === "2" ? "średni" : "trudny"} warty {this.state.questionPoints} punktów
                  </Text>
                </View>
                <View style={stylesGame1.questionView}>
                  <Text style={stylesGame1.questionText}>
                    {this.state.question.question}
                  </Text>
                  <View style={stylesGame1.buttonsView}>
                    <Text style={this.state.question.odp === "a" ? stylesGame1.buttonAnswerDisableGood : this.state.odp === "a" ? stylesGame1.buttonAnswerDisableBad : stylesGame1.buttonAnswerDisable}  >
                      {`A: ${this.state.question.a}`}
                    </Text>
                  </View>
                  <View style={stylesGame1.buttonsView}>
                    <Text style={this.state.question.odp === "b" ? stylesGame1.buttonAnswerDisableGood : this.state.odp === "b" ? stylesGame1.buttonAnswerDisableBad : stylesGame1.buttonAnswerDisable} >
                      {`B: ${this.state.question.b}`}
                    </Text>
                  </View>
                  <View style={stylesGame1.buttonsView}>
                    <Text style={this.state.question.odp === "c" ? stylesGame1.buttonAnswerDisableGood : this.state.odp === "c" ? stylesGame1.buttonAnswerDisableBad : stylesGame1.buttonAnswerDisable} >
                      {`C: ${this.state.question.c}`}
                    </Text>
                  </View>
                  <View style={stylesGame1.buttonsView}>
                    <Text style={this.state.question.odp === "d" ? stylesGame1.buttonAnswerDisableGood : this.state.odp === "d" ? stylesGame1.buttonAnswerDisableBad : stylesGame1.buttonAnswerDisable} >
                      {`D: ${this.state.question.d}`}
                    </Text>
                  </View>
                  {this.state.isGood === "1" ?

                    <View style={stylesGame1.goodView}>
                      <Text style={stylesGame1.goodText}>Brawo, poprawna odpowiedź.</Text>
                    </View>
                    :
                    <View style={stylesGame1.badViwe}>
                      <Text style={stylesGame1.badText}>Niestety, nie udało się</Text>
                    </View>
                  }
                  {this.state.questionNumber >= 9 ?
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonNext} onPress={() => { this.endEtap1() }} >
                        ZAKOŃCZ ETAP 1
                      </Text>
                    </View>
                    :
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonNext} onPress={() => { this.nextOne() }}>
                        KOLEJNE PYTANIE
                        </Text>
                    </View>
                  }
                </View>
              </ImageBackground>
            </View>
          )
        }
        break;
      //Etap 2
      case "2":
        if (this.state.info) {
          if (!this.state.loadGame2) {
            this.loadGame2()
          }
          return (
            <ImageBackground style={stylesGame1.container} source={require('./assets/bg4.jpg')} style={stylesScreen0.container}>
              <View style={stylesGame1.infoView}>
                <Text style={stylesGame1.infoTitle}>Zasady etapu drugiego</Text>
                <Text style={stylesGame1.infoText}>Etap składa się z 18 pytań. {"\n"}Wraz z koljnymi pytaniami wzrasta poziom trudności.</Text>
                <Text style={stylesGame1.infoText} >
                  Sytsem zmiany trudności: {"\n"}6 pytań - poziom 1 {"\n"} 6 pytań poziom - 2 {"\n"} 4 pytania - poziom 3 {"\n"} 2 pytania - poziom 4 {"\n"}Druga błędna odpowiedź kończy rozgrywkę. {"\n"}Koła ratunkowe: {"\n"}Pasywne - Ratuje cię przed odpadnięciem z rozgrywki w razie błędnej odpowiedzi. {"\n"}Sprawdzenie czy dana odpowiedź jest porpawan. {"\n"}Zmiana pytania na inne. {"\n"}Odrzucenie 2 nie poprawnych odpowiedzi. {"\n"}Zmiana pytania na inne, dodatkowo o obniżonym poziomie trudności(dostępne po 6 pytaniu).</Text>
                <Text style={stylesGame1.infoButton} onPress={() => { this.setState({ info: false }); AsyncStorage.setItem("info", JSON.stringify(false)) }}>OK</Text>
              </View>
            </ImageBackground>
          )
        }
        if (!this.state.loadGame2) {
          this.loadGame2()
        } else if (!this.state.isGood) {
          return (
            <View style={stylesGame1.container}>
              <ImageBackground source={require('./assets/Xayah.jpg')} style={stylesGame1.image}>
                <View style={stylesGame1.topBarView}>
                  <Text style={stylesGame1.topBarText}>Pytanie {this.state.questionNumber}</Text>
                  <Text style={stylesGame1.topBarText}>Punkty {this.state.etap2Points}</Text>
                </View>
                <View style={stylesGame1.helpView}>
                  <TouchableHighlight onPress={() => { this.setState({ screen: "20" }) }}>
                    <Image style={{ width: 75, height: 75 }} source={require('./assets/t1.webp')} />
                  </TouchableHighlight>
                  <Text style={stylesGame1.helpHalfButton} onPress={() => { this.setState({ screen: "20" }) }} > Koła ratunkowe</Text>
                </View>
                <View style={stylesGame1.questionView}>
                  <Text style={stylesGame1.questionText}>
                    {this.state.question.question}
                  </Text>
                  {this.state.checkingAnswer ?
                    <Text style={stylesGame1.checkingAnswer}>Sprawdzanie odpowiedzi</Text>
                    : null
                  }
                  {this.state.helpHalf1 === "a" || this.state.helpHalf2 === "a" || this.state.helpHalf3 === "a" ?
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswerDisable} >
                        {`A: ${this.state.question.a}`}
                      </Text>
                    </View>
                    :
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswer} onPress={() => { if (this.state.checkingAnswer) { this.checkAnswer("a") } else { this.answered2("a") } }} >
                        {`A: ${this.state.question.a}`}
                      </Text>
                    </View>
                  }
                  {this.state.helpHalf1 === "b" || this.state.helpHalf2 === "b" || this.state.helpHalf3 === "b" ?
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswerDisable} >
                        {`B: ${this.state.question.b}`}
                      </Text>
                    </View>
                    :
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswer} onPress={() => { if (this.state.checkingAnswer) { this.checkAnswer("b") } else { this.answered2("b") } }} >
                        {`B: ${this.state.question.b}`}
                      </Text>
                    </View>
                  }
                  {this.state.helpHalf1 === "c" || this.state.helpHalf2 === "c" || this.state.helpHalf3 === "c" ?
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswerDisable} >
                        {`C: ${this.state.question.c}`}
                      </Text>
                    </View>
                    :
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswer} onPress={() => { if (this.state.checkingAnswer) { this.checkAnswer("c") } else { this.answered2("c") } }} >
                        {`C: ${this.state.question.c}`}
                      </Text>
                    </View>
                  }
                  {this.state.helpHalf1 === "d" || this.state.helpHalf2 === "d" || this.state.helpHalf3 === "d" ?
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswerDisable} >
                        {`D: ${this.state.question.d}`}
                      </Text>
                    </View>
                    :
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonAnswer} onPress={() => { if (this.state.checkingAnswer) { this.checkAnswer("d") } else { this.answered2("d") } }} >
                        {`D: ${this.state.question.d}`}
                      </Text>
                    </View>
                  }
                </View>
              </ImageBackground>
            </View>
          )
        } else {
          return (
            <View style={stylesGame1.container}>
              <ImageBackground source={require('./assets/Xayah.jpg')} style={stylesGame1.image}>
                <View style={stylesGame1.topBarView}>
                  <Text style={stylesGame1.topBarText}>Pytanie {this.state.questionNumber}</Text>
                  <Text style={stylesGame1.topBarText}>Punkty {this.state.etap2Points}</Text>
                </View>
                <View style={stylesGame1.questionView}>
                  <Text style={stylesGame1.questionText}>
                    {this.state.question.question}
                  </Text>
                  <View style={stylesGame1.buttonsView}>
                    <Text style={this.state.question.odp === "a" ? stylesGame1.buttonAnswerDisableGood : this.state.odp === "a" ? stylesGame1.buttonAnswerDisableBad : stylesGame1.buttonAnswerDisable}  >
                      {`A: ${this.state.question.a}`}
                    </Text>
                  </View>
                  <View style={stylesGame1.buttonsView}>
                    <Text style={this.state.question.odp === "b" ? stylesGame1.buttonAnswerDisableGood : this.state.odp === "b" ? stylesGame1.buttonAnswerDisableBad : stylesGame1.buttonAnswerDisable} >
                      {`B: ${this.state.question.b}`}
                    </Text>
                  </View>
                  <View style={stylesGame1.buttonsView}>
                    <Text style={this.state.question.odp === "c" ? stylesGame1.buttonAnswerDisableGood : this.state.odp === "c" ? stylesGame1.buttonAnswerDisableBad : stylesGame1.buttonAnswerDisable} >
                      {`C: ${this.state.question.c}`}
                    </Text>
                  </View>
                  <View style={stylesGame1.buttonsView}>
                    <Text style={this.state.question.odp === "d" ? stylesGame1.buttonAnswerDisableGood : this.state.odp === "d" ? stylesGame1.buttonAnswerDisableBad : stylesGame1.buttonAnswerDisable} >
                      {`D: ${this.state.question.d}`}
                    </Text>
                  </View>
                  {this.state.isGood === "1" ?

                    <View style={stylesGame1.goodView}>
                      <Text style={stylesGame1.goodText}>Brawo, poprawna odpowiedź.</Text>
                    </View>
                    :
                    <View style={stylesGame1.badViwe}>
                      <Text style={stylesGame1.badText}>Niestety, nie udało się</Text>
                    </View>
                  }
                  {this.state.questionNumber >= 18 || this.state.lose ?
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonNext} onPress={() => { this.endEtap2() }} >
                        Podsumowannie
                      </Text>
                    </View>
                    :
                    <View style={stylesGame1.buttonsView}>
                      <Text style={stylesGame1.buttonNext} onPress={() => { this.nextOne2() }}>
                        KOLEJNE PYTANIE
                        </Text>
                    </View>
                  }
                </View>
              </ImageBackground>
            </View>
          )
        }
        return (
          <View>

          </View>
        )
        break;
      //Etap 2 Help
      case "20":
        return (
          <ImageBackground style={stylesHelp.container} source={require('./assets/bg20.png')}>
            <View style={stylesHelp.helpView}>
              <Text style={stylesHelp.title}>Koła ratunkowe</Text>
              <Text style={!this.state.checkAnswer ? stylesHelp.buttonHelp : stylesHelp.buttonHelpUsed} onPress={() => { if (!this.state.checkAnswer) { this.setState({ checkingAnswer: true, screen: "2" }) } }}>Sprawdzanie wybranej odpowiedzi</Text>
              <Text style={!this.state.helpHalf ? stylesHelp.buttonHelp : stylesHelp.buttonHelpUsed} onPress={() => { if (!this.state.helpHalf) { this.helpHalf(); this.setState({ screen: "2" }) } }} >Usuwanie dwóch nie poprawnych odpowiedzi</Text>
              <Text style={stylesHelp.buttonHelp}>Zamiana pytania</Text>
              <Text style={this.state.passiv ? stylesHelp.passiv : stylesHelp.passivUsed}>Pasywny ratunek w razie błędnej odpowiedzi</Text>
            </View>
            <Text style={stylesHelp.canel} onPress={() => { this.setState({ screen: "2" }) }} >Anuluj</Text>
          </ImageBackground>
        )
        break;
      //Podsumowanie
      case "9":
        return (
          <View style={stylesSumingUp.container}>
            <Text style={stylesSumingUp.title}>Podsumowanie rozgrywki</Text>
            <View style={stylesSumingUp.mainView}>
              <Text style={stylesSumingUp.mainText}>Etap 1: {this.state.etap1Points}/510</Text>
              <Text style={stylesSumingUp.mainText}>Etap 2: {this.state.etap2Points}/880</Text>
              <Text style={stylesSumingUp.mainText}>Suma : {this.state.etap1Points + this.state.etap2Points}</Text>
            </View>
            <View style={stylesSumingUp.buttonsView}>
              <Text style={stylesSumingUp.buttonsText} onPress={() => { this.endGame() }}>ok</Text>
            </View>
          </View>
        )
        break;
      //Historia
      case "10":
        if (!this.state.loadHistory) {
          this.loadHistory()
        }
        return (
          <View style={stylesHistory.container}>
            <View style={stylesHistory.mainView}>
              <Text style={stylesHistory.title}>Historia rozgrywek</Text>
              {Array.isArray(this.state.history) ?
                <View>
                  {
                    this.state.history.map((value, id) => {
                      return (
                        <View key={id} style={stylesHistory.tableView}>
                          <Text style={stylesHistory.tableText}>
                            {value[0]}
                          </Text>
                          <Text style={stylesHistory.tableText}>
                            E1: {value[1]}
                          </Text>
                          <Text style={stylesHistory.tableText}>
                            E2: {value[2]}
                          </Text>
                          <Text style={stylesHistory.tableText}>
                            S: {value[1] + value[2]}
                          </Text>
                        </View>
                      )
                    })
                  }
                </View>
                :
                <View>

                </View>
              }
            </View>
            <Text style={stylesHistory.buttonBack} onPress={() => { this.setState({ screen: "0", loadHistory: false }) }}>Powrót do menu</Text>
          </View>
        )
        break;
    }
  }
}

const stylesScreen0 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161D26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    justifyContent: 'center',
    paddingBottom: 50,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: '#EDB852',
    fontSize: 34,
    fontWeight: 'bold',
  },
  etapsView: {
    width: '70%',
    alignItems: 'center',
    marginBottom: 25,
  },
  etaps: {
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(42, 42, 23, 0.8)',
    opacity: 0.8,
    borderRadius: 10,
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.6,
    elevation: 15,
    color: '#fff',
  },
  buttonsView: {
    margin: 10,
    width: '50%',
  },
  button: {
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
  },
  buttonStart: {
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "#BF1736",
  },
  buttonHistory: {
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "#0E2773",
  },

});

const stylesWariant = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161D26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: "#fff",
    padding: 5,
  },
  buttonsView: {
    margin: 10,
    width: '70%',
  },
  buttonE: {
    fontSize: 26,
    textAlign: 'center',
    padding: 10,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "#0E2773",
  },
  buttonH: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "#BF1736",
  },
});

const stylesGame1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161D26',
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  infoTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: "#fff",
    margin: 10,
  },
  infoText: {
    fontSize: 26,
    color: "#fff",
    margin: 5,
    textAlign: 'center',
  },
  infoView: {
    backgroundColor: 'rgba(42, 42, 42, 0.8)',
    margin: 20,
  },
  infoButton: {
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "#BF1736",
  },
  topBarView: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBarText: {
    fontSize: 20,
    color: "#fff",
  },
  wariantView: {
    padding: 10,
  },
  wariantText: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 22,
  },
  questionView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  helpView: {
    flexDirection: 'row',
  },
  helpHalfButton: {
    fontSize: 26,
    textAlign: 'center',
    color: "#43D9BD",
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "#101726",
    padding: 5,
  },
  helpHalfButtonDisable: {

  },
  buttonsView: {
    margin: 10,
    width: '70%',
  },
  buttonAnswer: {
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "#BF1736",
  },
  buttonAnswerDisable: {
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "#333",
  },
  buttonAnswerDisableGood: {
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "green",
  },
  goodView: {
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    borderRadius: 5,
  },
  goodText: {
    margin: 10,
    fontSize: 30,
    color: "green",
    fontWeight: 'bold',
  },
  badViwe: {
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    borderRadius: 5,
  },
  badText: {
    margin: 10,
    fontSize: 30,
    color: "red",
    fontWeight: 'bold',
  },
  buttonAnswerDisableBad: {
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "red",
  },
  buttonNext: {
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    borderRadius: 5,
    backgroundColor: "#2196F3",
  },
  checkingAnswer: {
    color: "#000",
    fontSize: 24,
    padding: 10,
    backgroundColor: 'rgba(252, 215, 54, 0.7)',
  },
});

const stylesSumingUp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161D26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#EDB852',
    fontSize: 34,
    fontWeight: 'bold',
  },
  mainView: {
    width: '70%',
    alignItems: 'center',
    marginBottom: 25,
  },
  mainText: {
    padding: 15,
    margin: 10,
    backgroundColor: 'rgba(42, 42, 23, 0.8)',
    opacity: 0.8,
    borderRadius: 10,
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.6,
    elevation: 15,
    color: '#fff',
  },
  buttonsView: {
    margin: 10,
    width: "50%",
  },
  buttonsText: {
    fontSize: 26,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: "#0E2773",
  },
})

const stylesHelp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161D26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    margin: 10,
  },
  helpView: {
    justifyContent: 'center',
    width: "70%",
  },
  buttonHelp: {
    fontSize: 24,
    textAlign: 'center',
    padding: 5,
    margin: 5,
    color: "#fff",
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.7,
    elevation: 15,
    backgroundColor: 'rgba(0, 227, 64, 0.5)',
  },
  buttonHelpUsed: {
    fontSize: 24,
    textAlign: 'center',
    padding: 5,
    margin: 5,
    color: "#fff",
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.7,
    elevation: 15,
    backgroundColor: 'rgba(4, 4, 4, 0.5)',
  },
  passiv: {
    margin: 10,
    fontSize: 24,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: 'rgba(0, 227, 64, 0.5)',
  },
  passivUsed: {
    margin: 5,
    fontSize: 24,
    textAlign: 'center',
    padding: 5,
    color: "#fff",
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    backgroundColor: 'rgba(4, 4, 4, 0.5)',
  },
  canel: {
    fontSize: 26,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    borderRadius: 5,
    backgroundColor: "#2196F3",
  },
})

const stylesHistory = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161D26',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    margin: 10,
    color: "#fff",
  },
  mainView: {
    width: '100%',
    alignItems: 'center',
  },
  tableView: {
    flexDirection: 'row',
    width: '100%',
    borderColor: "#fff",
    borderWidth: 4,
  },
  tableText: {
    color: '#fff',
    fontSize: 24,
    padding: 10,
  },
  buttonBack: {
    fontSize: 26,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "#000",
    shadowRadius: 15,
    shadowOpacity: 0.52,
    elevation: 15,
    borderRadius: 5,
    backgroundColor: "#2196F3",
    marginVertical: 50,
  },
})
