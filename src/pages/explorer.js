import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import { SEO } from 'components/seo'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { SubscriptionContainer } from 'store'
import { subscribeState } from 'store/reducer/subscription-action'
import GraphiQL from 'graphiql'
import GraphiQLExplorer from 'graphiql-explorer'
// import { buildClientSchema, getIntrospectionQuery, parse } from 'graphql'
import { useSetState } from 'react-use'

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
      <SubscriptionContainer.Provider initState={{ ...subscribeState }}>
        <h1>Explorer</h1>

        <GraphiQLExplorer
          schema={state.schema}
          query={state.query}
          onEdit={handleEditQuery}
          onRunOperation={(operationName) =>
            graphiqlRef.handleRunQuery(operationName)
          }
          explorerIsOpen={state.explorerIsOpen}
          onToggleExplorer={handleToggleExplorer}
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
      </SubscriptionContainer.Provider>
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
