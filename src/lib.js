import fs from 'fs'

export const chooseRandom = (items = [], quantity) => {
  let prev = []
  let selected = []
  let randIdx 
  for (let i =0; i < quantity; i++) {
    do {
      randIdx = Math.floor(Math.random() * items.length)
    } while (!prev.includes(randIdx))

    prev.push(randIdx)
    selected.push(items[randIdx])
  }
  return selected
}

export const createPrompt = () => {
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
