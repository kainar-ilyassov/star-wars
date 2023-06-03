import { type ReactElement, Suspense } from 'react'
import { Watermark, Layout, Typography } from 'antd'
import { AppRouter } from 'app/providers/router'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import './styles/index.scss'

const { Header, Footer, Content } = Layout
const { Title, Text } = Typography

export const App = (): ReactElement => {
  const { appTheme } = useTheme()

  return (
    <Watermark content="Test Task">
      <Layout className={classNames('app', [appTheme])}>
        <Suspense fallback="">
          <Header className={classNames('header')}>
            <Title>Star Wars</Title>
            <ThemeSwitcher/>
          </Header>
          <Content className={classNames('content')}>
            <AppRouter/>
          </Content>
          <Footer className={classNames('footer')}>
            <Text>Copyright &#9400; 2023 Faraway</Text>
          </Footer>
        </Suspense>
      </Layout>
    </Watermark>
  )
}
