import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://mock.shop/api',
  documents: 'src/**/*.graphql',
  generates: {
    './src/types/generated.d.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
      config: {
        withSmartOperationFunctions: true,
      },
    },
  },
}

export default config
