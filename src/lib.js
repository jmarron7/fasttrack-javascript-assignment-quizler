import fs from 'fs'

export const chooseRandom = (array = [], numItems) => {
  if (numItems < 1 || numItems > array.length || numItems === undefined) {
    numItems = Math.floor(Math.random() * (array.length) + 1);
  }

  if (array.length <= 1) return array;

  let questions = [...array];

  for (let i = questions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = questions[i]
    questions[i] = questions[j]
    questions[j] = k
  }

  return questions.slice(0, numItems);
}

export const createPrompt = (object) => {
  // TODO implement createPrompt
}

export const createQuestions = () => {
  // TODO implement createQuestions
}

export const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
  })

export const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err =>
      err ? reject(err) : resolve('File saved successfully')
    )
  })
