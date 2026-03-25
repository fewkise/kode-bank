module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setGenerator('Component', {
    description: '❗️ Нужно находиться в /name',
    prompts: [
      // {
      //   type: 'input',
      //   name: 'name',
      //   message: 'Enter component name',
      // },
    ],
    actions: function (data) {
      const actions = [];

      const path = process.argv[process.argv.length - 1];

      const pathChunks = path.split('/');
      data.name = pathChunks[pathChunks.length - 1];

      actions.push({
        type: 'add',
        path: path + '{{destinationpath}}/ui/{{kebabCase name}}.tsx',
        templateFile: 'plop-templates/component/component.tsx.hbs',
      });
      actions.push({
        type: 'add',
        path: path + '{{destinationpath}}/ui/{{kebabCase name}}-connector.tsx',
        templateFile: 'plop-templates/component/component-connector.tsx.hbs',
      });
      actions.push({
        type: 'add',
        path: path + '{{destinationpath}}/ui/{{kebabCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/component.stories.tsx.hbs',
      });
      actions.push({
        type: 'add',
        path: path + '{{destinationpath}}/ui/index.ts',
        templateFile: 'plop-templates/component/index-ui.ts.hbs',
      });
      actions.push({
        type: 'add',
        path: path + '{{destinationpath}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      });

      return actions;
    },
  });
};
