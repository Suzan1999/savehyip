document.addEventListener('alpine:init', () => {
    Alpine.data('accordion', () => ({
      data: [
        {
          id: '1',
          heading: 'What is Alpine.js?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui, ac feugiat metus. Vivamus id pellentesque urna, quis hendrerit tortor. Sed pharetra sapien a metus fringilla varius.',
          isOpen: false,
        },
        {
          id: '2',
          heading: 'Is Alpine.js better than jQuery?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui, ac feugiat metus. Vivamus id pellentesque urna, quis hendrerit tortor. Sed pharetra sapien a metus fringilla varius.',
          isOpen: false,
        },
        {
          id: '3',
          heading: 'Who created Alpine.js?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui, ac feugiat metus. Vivamus id pellentesque urna, quis hendrerit tortor. Sed pharetra sapien a metus fringilla varius.',
          isOpen: false,
        },
        {
          id: '4',
          heading: 'Who created Alpine.js?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui, ac feugiat metus. Vivamus id pellentesque urna, quis hendrerit tortor. Sed pharetra sapien a metus fringilla varius.',
          isOpen: false,
        },
        {
          id: '5',
          heading: 'Who created Alpine.js?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui, ac feugiat metus. Vivamus id pellentesque urna, quis hendrerit tortor. Sed pharetra sapien a metus fringilla varius.',
          isOpen: false,
        },
      ]
    }))
  });