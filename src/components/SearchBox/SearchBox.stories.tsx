import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';

const meta: Meta<typeof SearchBox> = {
  component: SearchBox,
  title: 'SearchBox',
};

export default meta;

type Story = StoryObj<typeof SearchBox>;

export const SearchBoxStory: Story = (args: any) => {
  const [selectedItems, setSelectedItems] = useState<
    { title: string; value: string }[]
  >([]);

  const fakeApi = (
    query: string
  ): Promise<{ title: string; value: string }[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(list.filter(item => item.title.includes(query)));
      }, 1000);
    });
  };

  const list = [
    { title: 'привет', value: 'value1' },
    { title: 'как дела', value: 'value2' },
    { title: 'как погода', value: 'value3' },
    { title: 'как погода', value: 'value31' },
    { title: 'как погода', value: 'value32' },
    { title: 'как погода', value: 'value33' },
    { title: 'как погода', value: 'value34' },
    { title: 'как погода', value: 'value35' },
    { title: 'как погода', value: 'value36' },
    { title: 'как погода', value: 'value37' },
    { title: 'азазаза', value: 'value4' },
    { title: 'мне нравятся губы', value: 'value5' },
    { title: 'твои и глаза', value: 'value6' },
  ];

  const handleItem = (item: any) => {
    if (selectedItems.find(selectedItem => selectedItem.value === item.value)) {
      return;
    }
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem
      maxime, modi est, sed vero doloremque, cupiditate nesciunt beatae tenetur
      quam ea esse. Repellat voluptates fugit deserunt tempora doloribus quasi?
      <SearchBox {...args} callback={fakeApi} itemCallback={handleItem} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem ut
      suscipit ipsa perspiciatis? Beatae aliquam molestias officia, quibusdam
      perferendis, reiciendis fuga alias at odio exercitationem, velit ex
      repudiandae amet?
      <SearchBox {...args} callback={fakeApi} itemCallback={handleItem} />
      <div style={{ margin: 20 }}>
        {selectedItems.map(item => (
          <div key={item.value}>
            {item.title} -- {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};
SearchBoxStory.args = {};
