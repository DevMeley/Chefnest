// this code is o test the server
const heathcheck = async (req, res) => {
    res.status(200).json({
        message:"server is working fine"
    })
}

module.exports = heathcheck