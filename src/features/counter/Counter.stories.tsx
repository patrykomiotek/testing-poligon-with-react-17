import { ComponentMeta } from '@storybook/react';
import { Provider } from "react-redux";

import { store } from "../../store";

import { Counter } from './Counter';

export default {
  title: 'Redux/Components/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;


export const _Counter = () => <Provider store={store}><Counter /></Provider>

// export const decorators = [
//   (Story) => (
//     <Provider store={store}>
//       <Story />
//     </Provider>
//   ),
// ]