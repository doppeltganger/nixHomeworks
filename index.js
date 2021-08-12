// first task

class Student {
  constructor(enrollee) {
    this.id = Student.id++
    Object.assign(this, enrollee)
		this.isSelfPayment = this.ratingPoint <= 800
  }

  static id = 1
  static studentsList = Student.getStudentsList(studentArr)
  static freeStudentsList = Student.getFreeStudentsList(Student.studentsList)

  static getStudentsList(inputArr) {
    const outputArr = []
    inputArr.map(item => outputArr.push(new Student(item)))
    return outputArr
  }

  static getFreeStudentsList(inputArr) {
    const outputArr = []
    
    inputArr.map(item => {
      if (!item.isSelfPayment) {
        outputArr.push(item)
        outputArr.sort((a, b) => {
          if (a.ratingPoint < b.ratingPoint) return 1
          if (a.ratingPoint > b.ratingPoint) return -1
          return b.schoolPoint - a.schoolPoint
        })
        .splice(5)
      } 
    })
    return outputArr
  }
}

console.log(Student.studentsList)
console.log(Student.freeStudentsList)

//second task
class CustomString {
  reverse(inputString) {
    if (typeof(inputString) === 'string') {
      let outputString = ''
      for (let i = inputString.length - 1; i >= 0; i--) {
        outputString+= inputString[i]
      }
      return outputString
    }
    console.error('Enter correct string')
  }

  ucFirst(inputString) {
    if (typeof(inputString) === 'string') {
      let outputString = ''
      for (let i = 1; i < inputString.length; i++) {
        outputString += inputString[i]
      }
      return inputString[0].toUpperCase() + outputString
    }
    console.error('Enter correct string')
  }

  ucWords(inputString) {
    if (typeof(inputString) === 'string') {
      let letterCounter = ''
      let outputString = ''
      for (let i = 0; i < inputString.length; i++) {
        (i == 0 || letterCounter == ' ' && i < inputString.length) ? letterCounter = inputString[i].toUpperCase() : letterCounter = inputString[i]
        outputString += letterCounter
      }
      return outputString
    }
    console.error('Enter correct string')
  }
}

const str = new CustomString()

console.log(str.reverse('str'))
console.log(str.ucFirst('str'))
console.log(str.ucWords('str str str'))

//third task
class Validator {
  checkIsEmail(inputEmail) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    console.log(emailRegex.test(inputEmail) ? true : false) 
  }

  checkIsDomain(inputDomain) {
    const domainRegex = /^([a-z0-9]+([-a-z0-9]*[a-z0-9]+)?.){0,}([a-z0-9]+([-a-z0-9]*[a-z0-9]+)?){1,63}(.[a-z0-9]{2,7})+$/i
    console.log(domainRegex.test(inputDomain) ? true : false)
  }

  checkIsDate(inputDate) {
    const dateRegex = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/
    console.log(dateRegex.test(inputDate) ? true : false)
  }

  checkIsPhone(inputPhone) {
    const phoneRegex = /^\+38?\s[^\w\d]\d{3}[^\w\d]\s\d{3}[^\w\d]\d{2}[^\w\d]\d{2}$/
    console.log(phoneRegex.test(inputPhone) ? true : false)
  }
}

const validator = new Validator()
validator.checkIsEmail('vasya.pupkin@gmail.com')
validator.checkIsDomain('google.com')
validator.checkIsDate('30.11.2019')
validator.checkIsPhone('+38 (066) 937-99-92')
