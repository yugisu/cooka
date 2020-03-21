import { controller } from 'utils/create-controller'

export const HelloController = controller({
  getRoot: (req, res) => {
    res.send('Hello World!')
  },
})
