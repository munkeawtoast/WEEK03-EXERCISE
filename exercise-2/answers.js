function convertADtoBE(input) {
    // AD คือคริสดศักราย
    // BE คือพุทธศักราช
    //
    // TODO: แปลงปีใน คริสตศักราช เป็น พุทธศักราช เช่น 2000 เป็น "พ.ศ. 2543"
    // โดยให้เติมตัวอักษร พ.ศ. เข้าไปด้านหน้าด้วย
    const incorrectString = 'ไม่ถูกต้อง'
    let adYear = Number.parseInt(input)
    
    //
    if (Number.isNaN(adYear)) return incorrectString
    if (adYear < 0) return incorrectString
    
    return `พ.ศ. ${adYear + 543}`
    
}

function evenOrOdd(input) {
    // TODO: ให้ตรวจสอบว่าตัวเลข input เป็นเลขคู่หรือเลขคี่
    return input % 2 === 0
            ? 'even'
            : 'odd'
}

function getFullName(input) {
    // TODO: ให้นำคำนำหน้าชื่อ ชื่อต้น นามสกุล มาต่อกัน
    const { firstName, lastName, sex } = input
    const prefix = sex === 'male' ? 'Mr.' : 'Ms.'
    return `${prefix} ${firstName} ${lastName}`
}

function getFirstName(input) {
    // TODO: ให้ทำการตัดนามสกุลออกโดยใช้ indexOf() และ substring()
    const indexOfSeparator = input.indexOf(' ')
    return input.substring(0, indexOfSeparator)
}