> topic:keep random

    + My [user|name|username|login] is *1
    - {keep} Hello <cap>! ^save(firstName, <cap>)

    + ~emothanks
    - You're welcome
    - No problem
    - My pleasure

    + * (recent|latest|last) *
    - {keep} ^getRecentTracks()

    + Play it
    % * (recent|latest|last) *
    - ^searchAndPlayRecentTrack()

    + Play [*] (like|similar|akin) *(1-20)
    - {keep} ^getSimilarTrack(<cap>)

    + Play *(1-20)
    - {keep} ^searchTracks(<cap1>, true)

    + ~yes
    % Play *(1-20)
    - Okay, good.
    - Glad to hear it.

    + ~no
    % Play *(1-20)
    - ^searchTracks(<p1cap1>, false)

    + ~emohello
    - {keep} ~emohello ^get(firstName). Nice to see you again!

    + ~emogoodbye
    - Happy listening!



< topic