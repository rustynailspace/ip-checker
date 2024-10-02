const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const ipinfoToken = process.env.IPINFO_TOKEN; // Store your API token in environment variables

  try {
    const ipInfoResponse = await fetch(`https://ipinfo.io?token=${ipinfoToken}`);
    const ipInfo = await ipInfoResponse.json();

    res.status(200).json({
      ip: ipInfo.ip,
      location: `${ipInfo.city}, ${ipInfo.region}, ${ipInfo.country}`,
      isp: ipInfo.org
    });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch IP information' });
  }
};
