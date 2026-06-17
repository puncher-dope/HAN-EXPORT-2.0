import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ fontSize: 72, marginBottom: '20px' }}>🚗</div>
        <div>HAN EXPORT</div>
        <div style={{ fontSize: 40, marginTop: '20px' }}>
          Экспорт авто из Кореи в Россию
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}

export default GET
