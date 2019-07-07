const CONSTANTS = {
  STORE: [
    {
      input: [
        {
          a: '1',
          b: '2',
          c: '3'
        },
        {
          d: '4',
          d23: '5'
        }
      ],
      output: 'a=1;b=2;c=3\nd=4;d23=5'
    }
  ],

  LOAD: [
    {
      input: 'a=1;b=2;c=3\nd=4;d23=5',
      output:
        [
          {
            a: '1',
            b: '2',
            c: '3'
          },
          {
            d: '4',
            d23: '5'
          }
        ]
    },
    {
      input: '',
      output:
        []
    },
    {
      input: 'asdasd',
      output:
        [
          {}
        ]
    }
  ],
};

module.exports = CONSTANTS;