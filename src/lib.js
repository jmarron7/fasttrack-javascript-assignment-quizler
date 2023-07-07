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

export const createPrompt = ({ numQuestions = 1, numChoices = 2 } = {}) => {
  let result = [];

  for (let q = 1; q <= numQuestions; q++) {
    result.push(
      {
        type: 'input',
        name: `question-${q}`,
        message: `Enter question ${q}`
      }
    );

    for (let c = 1; c <= numChoices; c++) {
      result.push(
        {
          type: 'input',
          name: `question-${q}-choice-${c}`,
          message: `Enter answer choice ${c} for question ${q}`
        }
      );
    }
  }
  return result;
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
