package com.burak.urlshortener.repository;

import com.burak.urlshortener.model.Url;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UrlRepository extends JpaRepository<Url,Long> {
    Url findByShortLink(String shortLink);
}
