import { type ReactElement, Suspense, useEffect } from 'react'
import { Watermark, Layout, Typography, Space } from 'antd'
import { AppRouter } from 'app/providers/router'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import './styles/index.scss'

const { Header, Footer, Content } = Layout
const { Text, Title } = Typography

export const App = (): ReactElement => {
  const { appTheme } = useTheme()

  return (
    <Watermark content="Test Task">
      <Layout className={classNames('app', [appTheme])}>
        <Suspense fallback="">
          <Header className={classNames('header')}>
            <Title className={classNames('title')} code={true}>Star Wars Characters</Title>
            <ThemeSwitcher/>
          </Header>
          <Content className={classNames('content')}>
            <AppRouter/>
          </Content>
          <Footer className={classNames('footer')}>
            <Text code={true}>Copyright &#9400; 2023 @Kaicodeme</Text>
          </Footer>
        </Suspense>
      </Layout>
    </Watermark>
  )
}
