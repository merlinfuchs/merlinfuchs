module.exports = {
    purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                '112': '28rem',
                '128': '32rem',
                '144': '36rem',
                '160': '40rem',
                '176': '44rem',
                '192': '48rem'
            },
            width: {
                '112': '28rem',
                '128': '32rem',
                '144': '36rem',
                '160': '40rem',
                '176': '44rem',
                '192': '48rem',
                '208': '52rem',
                '224': '56rem',
                '240': '60rem',
                '256': '64rem',
                '288': '72rem',
                '304': '76rem',
                '320': '80rem',
                '336': '84rem',
                '352': '88rem',
                '368': '92rem'
            },
            margin: {
                '-68': '-17rem',
                '112': '28rem',
                '128': '32rem'
            },
            borderWidth: {
                '1': '1px'
            },
            scale: {
                '102': '1.02'
            }
        },
    },
    variants: {
        extend: {
            margin: ['hover', 'group-hover'],
            padding: ['hover'],
            borderRadius: ['hover'],
            width: ['group-hover'],
            display: ['group-hover'],
            fontSize: ['hover']
        },
    },
    plugins: [],
}
