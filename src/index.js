import { canvas, canvas2 } from "./canvas";

document.addEventListener("DOMContentLoaded", () => {
    console.log("whats uppppp");
    canvas();
    canvas2();

    let apiKey = 'a0d411fa7c676669092342d66c4913d8'
    let apiSecret = '23bc040fcc0ff37a3b0e766029226950'

    // let cache = new LastFMcache();

    // var lastfm = new LastFM({
    //     apiKey: apiKey,
    //     apiSecret : apiSecret,
    //     cache : cache
    // });

    // var topArtistName = '';

    //     lastfm.tag.getWeeklyArtistChart({tag: 'reggae', limit:6}, {success: function(data){
    //         $('#top_artists').html(
    //             $('#lastfmTemplateArtists').render(data.weeklyartistchart.artist)
    //         );
    //         topArtistName = data.weeklyartistchart.artist[0].name;
    //         lastfm.artist.getInfo({artist: topArtistName}, {success: function(data){
    //             $('#top_tracks').html(
    //                 $('#lastfmTemplateTracks').render(data.toptracks.track)
    //             );
    //         }, error: function(code,message){
    //             alert('Error #'+code+': '+message);
    //         }});
    //     }});
    
});