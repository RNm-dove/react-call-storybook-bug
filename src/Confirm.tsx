import { createCallable } from 'react-call'

interface Props { message: string }
type Response = boolean

// This show error
/*
4:28:44 PM [vite] (client) Pre-transform error: Argument must be Identifier, Literal, QualifiedTypeIdentifier or TSQualifiedName. Received 'ObjectPattern'
Plugin: storybook:react-docgen-plugin
File: /xxxx/RNm-dove/react-call-storybook-bug/src/Confirm.tsx
4:28:44 PM [vite] Internal server error: Argument must be Identifier, Literal, QualifiedTypeIdentifier or TSQualifiedName. Received 'ObjectPattern'
Plugin: storybook:react-docgen-plugin
File: /xxxx/RNm-dove/react-call-storybook-bug/src/Confirm.tsx
  at getNameOrValue (/xxxx/RNm-dove/react-call-storybook-bug/node_modules/react-docgen/dist/utils/getNameOrValue.js:24:11)
  at displayNameHandler (/xxxx/RNm-dove/react-call-storybook-bug/node_modules/react-docgen/dist/handlers/displayNameHandler.js:22:54)
  at <anonymous> (/xxxx/RNm-dove/react-call-storybook-bug/node_modules/react-docgen/dist/parse.js:10:39)
  at Array.forEach (<anonymous>)
  at <anonymous> (/xxxx/RNm-dove/react-call-storybook-bug/node_modules/react-docgen/dist/parse.js:10:18)
  at Array.map (<anonymous>)
  at executeHandlers (/xxxx/RNm-dove/react-call-storybook-bug/node_modules/react-docgen/dist/parse.js:8:33)
  at parse (/xxxx/RNm-dove/react-call-storybook-bug/node_modules/react-docgen/dist/parse.js:43:12)
  at defaultParse (/xxxx/RNm-dove/react-call-storybook-bug/node_modules/react-docgen/dist/main.js:26:12)
  at TransformPluginContext.transform (/xxxx/RNm-dove/react-call-storybook-bug/node_modules/@storybook/react-vite/dist/preset.js:1:4189)
  at EnvironmentPluginContainer.transform (file:///xxxx/RNm-dove/react-call-storybook-bug/node_modules/vite/dist/node/chunks/dep-ByPKlqZ5.js:47631:19)
  at async loadAndTransform (file:///xxxx/RNm-dove/react-call-storybook-bug/node_modules/vite/dist/node/chunks/dep-ByPKlqZ5.js:41318:27)
  at async viteTransformMiddleware (file:///xxxx/RNm-dove/react-call-storybook-bug/node_modules/vite/dist/node/chunks/dep-ByPKlqZ5.js:42781:24)
*/
// export const {Root, ...Confirm} = createCallable<Props, Response>(({ call, message }) => (
//   <div role="dialog">
//     <p>{message}</p>
//     <button onClick={() => call.end(true)}>Yes</button>
//     <button onClick={() => call.end(false)}>No</button>
//   </div>
// ))

const {Root, ...Confirm} = createCallable<Props, Response>(({ call, message }) => (
  <div role="dialog">
    <p>{message}</p>
    <button onClick={() => call.end(true)}>Yes</button>
    <button onClick={() => call.end(false)}>No</button>
  </div>
))

export const ConfirmRoot = Root;

export { Confirm };