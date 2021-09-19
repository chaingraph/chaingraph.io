import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import { SEO } from 'components/seo'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import GraphiQL from 'graphiql'
import GraphiQLExplorer from 'graphiql-explorer'
// import { buildClientSchema, getIntrospectionQuery, parse } from 'graphql'
import { useSetState } from 'react-use'
import 'graphiql/graphiql.css'
import styled from 'utils/styles'

const GraphiQLContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid red;
`

function fetcher(params) {
  return fetch(
    'https://serve.onegraph.com/dynamic?app_id=c333eb5b-04b2-4709-9246-31e18db397e1',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
    .then((response) => response.text())
    .then((responseBody) => {
      try {
        return JSON.parse(responseBody)
      } catch (e) {
        return responseBody
      }
    })
}

function IndexPage() {
  const { t } = useTranslation()
  const graphiqlRef = useRef()
  const [state, setState] = useSetState({
    schema: null,
    query: '',
    explorerIsOpen: true,
  })

  const handleEditQuery = (query) => setState({ query })

  const handleToggleExplorer = () =>
    setState({ explorerIsOpen: !state.explorerIsOpen })

  return (
    <Layout>
      <SEO title="Explorer" lang={t('lang')} />
      <h1>Explorer</h1>
      <GraphiQLContainer>
        <GraphiQLExplorer
          schema={state.schema}
          query={state.query}
          onEdit={handleEditQuery}
          onRunOperation={(operationName) =>
            graphiqlRef.handleRunQuery(operationName)
          }
          explorerIsOpen={state.explorerIsOpen}
          onToggleExplorer={handleToggleExplorer}
          colors={{
            keyword: '#B11A04',
            // OperationName, FragmentName
            def: '#D2054E',
            // FieldName
            property: '#1F61A0',
            // FieldAlias
            qualifier: '#1C92A9',
            // ArgumentName and ObjectFieldName
            attribute: '#8B2BB9',
            number: '#2882F9',
            string: '#D64292',
            // Boolean
            builtin: '#D47509',
            // Enum
            string2: '#0B7FC7',
            variable: '#397D13',
            // Type
            atom: '#CA9800',
          }}
        />
        <GraphiQL
          ref={graphiqlRef}
          fetcher={fetcher}
          schema={state.schema}
          query={state.query}
          onEditQuery={handleEditQuery}
        >
          <GraphiQL.Toolbar>
            <GraphiQL.Button
              onClick={() => graphiqlRef.handlePrettifyQuery()}
              label="Prettify"
              title="Prettify Query (Shift-Ctrl-P)"
            />
            <GraphiQL.Button
              onClick={() => graphiqlRef.handleToggleHistory()}
              label="History"
              title="Show History"
            />
            <GraphiQL.Button
              onClick={handleToggleExplorer}
              label="Explorer"
              title="Toggle Explorer"
            />
          </GraphiQL.Toolbar>
        </GraphiQL>
      </GraphiQLContainer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
