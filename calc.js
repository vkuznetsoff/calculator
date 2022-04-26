let a = '' //First number
let b = '' //Second number
let sign = '' //Sign
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/']

const out = document.querySelector('.screen p')


function ClearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    out.textContent = 0
}

// console.log(document.querySelector('.ac'))

document.querySelector('.ac').addEventListener('click', () => ClearAll())

document.querySelector('.buttons').addEventListener('click', (event) => {
    //Pressed not button
    if (!event.target.classList.contains('btn')) return
    //Pressed AC
    if (event.target.classList.contains('ac')) return

    out.textContent = ''

    //Get pressed btn
    const key = event.target.textContent

    //Check digit click
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a = a + key
            out.textContent = a
        } else if (a !== '' && b != '' && finish) {
            b = key
            finish = false
            out.textContent = b

        } else {
            b += key
            out.textContent = b
        }
        console.log(a, b, sign)
        return

    }

    //Check operation click
    if (action.includes(key)) {
        sign = key
        out.textContent = a
        console.log(a, b, sign)
        return
    }

    //Check equal click
    if (key === '=') {

        if (b === '') {
            b = a
        }

        switch (sign) {
            case "+":
                a = (+a) + (+b)
                break

            case "-":
                a = (+a) - (+b)
                break

                case "X":
                    a = (+a) * (+b)
                    break

                    case "/":
                        if (b === '0') {
                            out.textContent = "Error"
                            a = ''
                            b = ''
                            sign = ''
                            return
                        }
                        a = (+a) / (+b)
                        break
        }

        finish = true
        out.textContent = a
       
    }
}
)